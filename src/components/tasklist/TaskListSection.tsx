// Global Imports
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// Local Imports

import {
  TaskSection,
  TaskList,
  StatusWrapper,
  ListStatus,
  ListStasusIcon,
  TaskWrapper,
  TitleTxt,
  DescriptionTxt,
  Subtasktxt,
  Container,
  ContainerBackspace,
  WrapperTop,
  SubtaskWrapper,
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  Subtask,
  NewColumn,
  NewColumnTxt,
} from "./TaskParts";

import EditTaskModal from "../shared/create-editTaskModal/CETaskModal";

//  Shared Components

import Status from "@/components/shared/Status/Status";
import KebabMenu from "../shared/KebabMenu";
import EditModal from "../shared/editModal/EditModal";
import EditBoardModal from "../shared/editBoardModal/EditBoardModal";

// Types

import { TaskListSectionProps } from "@/types/props";

// Selectors

import { checkSubtask } from "@/features/subtasks/subtaskSlice";
import { getToggles } from "@/selectors/togglesSelector";
import { getSelectedBoardId } from "@/selectors/boardSelectors";

// Actions

import {
  toggleModal,
  toggleEditBoard,
  toggleTaskModal,
  toggleEditTaskModal,
  toggleCreateTaskModal,
  toggleEditBoardModal,
} from "@/features/toggles/toggleSlice";

import { deleteTask, changeStatus } from "@/features/Tasks/taskSlice";
// Assets
import kLogo from "@/assets/icon-vertical-ellipsis.svg";
import { generateId } from "@/utils/helpers";
import theme from "@/styles/theme";

function TaskListSection({
  taskStageList,
  tasks,
  subtasks,
  selectedTask,
  setSelectedTask,
}: TaskListSectionProps) {
  //  Drag & Drop Hook
  // const { items, draggedItem, handleDragStart, handleDrop } =
  //   useDragAndDrop(tasks);

  // Redux State
  const {
    taskModal,
    editBoard,
    sidebar,
    editTaskModal,
    createTaskModal,
    editBoardModal,
  } = useSelector(getToggles);

  const boardId = useSelector(getSelectedBoardId);
  const dispatch = useDispatch();

  const [showOptions, setShowOptions] = useState(false);
  const handleShowOptions = (state: boolean) => {
    setShowOptions(state);
  };

  // Filter the status and stages for each board
  taskStageList = taskStageList.filter((stage) => stage.boardId === boardId);
  return (
    <TaskSection
      toggle={sidebar}
      onClick={() => {
        dispatch(toggleTaskModal(false));
        dispatch(toggleEditTaskModal(false));
        dispatch(toggleCreateTaskModal(false));
        dispatch(toggleEditBoardModal(false));
      }}
    >
      {taskStageList.map((stage) => {
        const list = tasks.filter(
          (list) => list.stage === stage.name && list.boardId === stage.boardId
        );

        // Task Lists
        const mappedList = list.map((list) => {
          const subtask = subtasks.filter((sub) => sub.taskId === list.id);
          const completeds = subtask.filter((sub) => sub.completed === true);
          return (
            <TaskWrapper
              key={generateId()}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedTask(list.id);
                dispatch(toggleTaskModal(true));
                dispatch(toggleModal());
              }}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", list.id);
              }}
            >
              <TitleTxt modal={false} children={list.title} />
              <Subtasktxt
                modal={false}
                children={`${completeds.length} of ${subtask.length} subtasks`}
              />
            </TaskWrapper>
          );
        });

        return (
          <>
            {stage.boardId === boardId && (
              <TaskList
                onDrop={(e) => {
                  e.preventDefault();
                  const taskId = e.dataTransfer.getData("text/plain");
                  dispatch(changeStatus({ status: stage.name, taskId }));
                }}
                onDragOver={(e) => e.preventDefault()}
              >
                <StatusWrapper>
                  <ListStasusIcon status={stage.name} />
                  <ListStatus children={`${stage.name} (${list.length})`} />
                </StatusWrapper>
                {mappedList}
              </TaskList>
            )}
          </>
        );
      })}
      <NewColumn>
        <NewColumnTxt
          children="+ new column"
          // onClick={() => dispatch(addColumn({ name: "feature", boardId }))}
        />
      </NewColumn>

      {/*  Modal  */}
      {taskModal && selectedTask && (
        <>
          {" "}
          <Container
            onClick={(e) => {
              e.stopPropagation();
              handleShowOptions(false);
            }}
          >
            <WrapperTop subtask={false}>
              <TitleTxt children={selectedTask.title} modal={true} />
              <DescriptionTxt children={`${selectedTask.description}`} />
              <KebabMenu
                onClick={() => dispatch(toggleEditBoard(!editBoard))}
                src={kLogo}
              />
            </WrapperTop>

            <EditModal
              toggle={editBoard}
              header={false}
              onEdit={() => {
                dispatch(toggleEditBoard(false));
                dispatch(toggleTaskModal(false));
                dispatch(toggleEditTaskModal(true));
              }}
              onDelete={() => {
                dispatch(toggleEditBoard(false));
                dispatch(toggleTaskModal(false));
                dispatch(deleteTask(selectedTask));
              }}
            />

            <WrapperTop subtask={true}>
              <Subtasktxt
                modal={true}
                children={`Subtasks ${
                  subtasks.filter(
                    (sub) =>
                      sub.taskId === selectedTask.id && sub.completed === true
                  ).length
                } of ${
                  subtasks.filter((sub) => sub.taskId === selectedTask.id)
                    .length
                }`}
              />
              {subtasks.map(
                (sub) =>
                  sub.taskId === selectedTask.id && (
                    <SubtaskWrapper key={sub.id}>
                      <CheckboxWrapper>
                        <HiddenCheckbox
                          key={sub.id}
                          id={sub.id}
                          onClick={() => {
                            dispatch(checkSubtask(sub.id));

                            // const task = tasks.find(
                            //   (t) => t.id === selectedTask.id
                            // );
                            // task && setSelectedTask(task.id);
                          }}
                        />
                        <StyledCheckbox
                          htmlFor={sub.id}
                          completed={sub.completed}
                          theme={theme}
                        />
                      </CheckboxWrapper>
                      <Subtask
                        children={sub.title}
                        completed={sub.completed}
                        key={sub.id}
                      />
                    </SubtaskWrapper>
                  )
              )}
            </WrapperTop>
            <Status
              toggleStatus={showOptions}
              handleToggleStatus={handleShowOptions}
              listName={taskStageList}
              stage={selectedTask.stage}
              taskId={selectedTask.id}
            />
          </Container>
        </>
      )}
      {(editTaskModal || createTaskModal) && (
        <EditTaskModal
          usage={editTaskModal ? "edit" : "create"}
          boardId={boardId}
          listName={taskStageList}
          stage={!createTaskModal ? selectedTask?.stage : ""}
          taskId={!createTaskModal ? selectedTask?.id : ""}
          toggle={editTaskModal}
        />
      )}

      {editBoardModal && (
        <EditBoardModal
          boardId={boardId}
          toggle={editBoardModal}
          usage="edit"
          key={generateId()}
        />
      )}
      <ContainerBackspace
        // onClick={() => {
        //   dispatch(toggleModal());
        // }}
        toggle={taskModal || editTaskModal || createTaskModal || editBoardModal}
      />
    </TaskSection>
  );
}

export default TaskListSection;
