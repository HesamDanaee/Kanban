// Global Imports
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

// Local Imports

import {
  Modal,
  Wrapper,
  InputWrapper,
  NoSubError,
} from "@/components/shared/create-editTaskModal/CETaskModalParts";

import {
  EditBoard,
  BoardNameInput,
  BoardNameTxt,
  BoardColumnWrapper,
  BoardColumnInput,
  DeleteBoardColumnButton,
  CreateBoardButton,
  SaveChangesBUtton,
} from "./EditBoardModalParts";

// Types

import { Stage } from "@/features/Tasks/taskSlice";

// Redux Selectors

import { getSelectedBoard } from "@/selectors/boardSelectors";
import { getStages } from "@/selectors/taskSelectors";
import { generateId } from "@/utils/helpers";
import { getTasks } from "@/selectors/taskSelectors";

// Redux Actions

import {
  changeColumn,
  addColumn,
  deleteColumn,
} from "@/features/Tasks/taskSlice";

import { deleteTask } from "@/features/Tasks/taskSlice";
import { changeBoard } from "@/features/board/boardSlice";
import { toggleEditBoardModal } from "@/features/toggles/toggleSlice";

function EditBoardModal({
  toggle,
  usage,
  boardId,
}: {
  toggle: boolean;
  usage: string;
  boardId: string;
}) {
  const dispatch = useDispatch();
  // Redux State
  const board = useSelector(getSelectedBoard)!;
  const stages = useSelector(getStages).filter(
    (stage) => stage.boardId === boardId
  );
  const tasks = useSelector(getTasks);

  // States

  const [title, setTitle] = useState(board.name);
  const [tempColumns, setTempColumns] = useState<Stage[]>(
    stages.length > 0
      ? [...stages]
      : new Array(1)
          .fill(null)
          .map(() => ({ boardId, id: generateId(), name: "" }))
  );
  const [removedColumns, setRemovedColumns] = useState<Stage[]>([]);

  // Handlers

  const handleAddColumn = () => {
    setTempColumns((prev) => [
      ...prev,
      { name: "", id: generateId(), boardId },
    ]);
  };

  const handleColumnChange = (index: number, value: string) => {
    const updatedColumns = [...tempColumns];
    updatedColumns[index] = {
      ...updatedColumns[index],
      name: value,
    };
    setTempColumns(updatedColumns);
  };

  const handleRemoveColumn = (name: string) => {
    const removedSub = tempColumns.find((col) => col.name === name);
    setRemovedColumns([...removedColumns, removedSub!]);
    setTempColumns(tempColumns.filter((col) => col.name !== name));
  };

  const handleSave = () => {
    // Generate new board Id
    const newBoardId = generateId();

    title !== "" && dispatch(changeBoard({ ...board, name: title }));

    // Remove Columns
    removedColumns.map((sub) => {
      dispatch(deleteColumn(sub.id));
      tasks.map(
        (task) =>
          task.boardId === sub.boardId &&
          task.stage === sub.name &&
          dispatch(deleteTask(task))
      );
    });
    tempColumns.map((col) => {
      if (stages.find((col2) => col2.id === col.id) !== undefined) {
        dispatch(
          changeColumn({
            ...col,
          })
        );
      } else {
        dispatch(
          addColumn({
            ...col,
            boardId: usage === "edit" ? boardId : newBoardId,
          })
        );
      }
    });

    dispatch(toggleEditBoardModal(false));
  };

  return (
    <Modal toggle={toggle} onClick={(e) => e.stopPropagation()}>
      <EditBoard children={`${usage === "edit" ? "edit" : "create"} board`} />
      <Wrapper>
        <BoardNameTxt children="board name" />
        <InputWrapper warning={false}>
          <BoardNameInput
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            warning={false && title === ""}
            placeholder="e.g.Take coffe break"
          />
        </InputWrapper>
      </Wrapper>

      <Wrapper subtaskWrapper={true}>
        <BoardNameTxt children="board columns" />
        {tempColumns.length > 0 ? (
          tempColumns.map((col, index) => (
            <BoardColumnWrapper>
              <BoardColumnInput
                key={col.id}
                value={col.name}
                onChange={(e) =>
                  handleColumnChange(index, e.currentTarget.value)
                }
              />
              <DeleteBoardColumnButton
                onClick={() => handleRemoveColumn(col.name)}
              />
            </BoardColumnWrapper>
          ))
        ) : (
          <NoSubError children="no columns" />
        )}
      </Wrapper>
      <CreateBoardButton
        children="+ add new column"
        onClick={handleAddColumn}
      />
      <SaveChangesBUtton children="save changes" onClick={handleSave} />
    </Modal>
  );
}

export default EditBoardModal;
