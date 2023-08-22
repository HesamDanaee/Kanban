// Global Imports
import { useSelector, useDispatch } from "react-redux";

// Local imports

import {
  Modal,
  EditTask,
  DescriptionInput,
  DescriptionTxt,
  SubtaskInput,
  DeleteSubtaskButton,
  TaskNameInput,
  TaskNameTxt,
  CreateSubtaskButton,
  EditTaskButton,
  Wrapper,
  SubTaskWrapper,
  InputWrapper,
  NoSubError,
} from "./CETaskModalParts";
import Status from "../Status/Status";

// React
import { useState } from "react";

// Redux Selectors

import { getTasks, getSelectedStage } from "@/selectors/taskSelectors";
import { getSubTasks } from "@/selectors/subtaskSelectors";

// Redux Actions
import {
  toggleEditTaskModal,
  toggleCreateTaskModal,
} from "@/features/toggles/toggleSlice";
import { editTask, addTask } from "@/features/Tasks/taskSlice";
import {
  createSubtask,
  deleteSubtask,
  editSubtask,
} from "@/features/subtasks/subtaskSlice";

// Types

import { SubtaskT } from "@/types/newTask.modal";
import { generateId } from "@/utils/helpers";
import { Stage } from "@/features/Tasks/taskSlice";

export default function EditTaskModal({
  listName,
  stage,
  taskId,
  toggle,
  usage,
  boardId,
}: {
  listName: Stage[];
  stage: string;
  taskId: string;
  toggle: boolean;
  usage: string;
  boardId: string;
}) {
  // Selected Task
  const task = useSelector(getTasks).find((task) => task.id === taskId);
  const subtasks = useSelector(getSubTasks).filter(
    (sub) => sub.taskId === taskId
  );
  const selectedStage = useSelector(getSelectedStage);
  // Controlled inupts
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [inputError, setInputError] = useState(false);
  const [tempSubtasks, setTempSubtasks] = useState<SubtaskT[]>(
    subtasks.length > 0
      ? [...subtasks]
      : new Array(1).fill(null).map(() => ({
          id: generateId(),
          title: "",
          completed: false,
          taskId,
        }))
  );
  const [removedSubtasks, setRemovedSubtasks] = useState<SubtaskT[]>([]);

  // Toggle the status
  const [showOptions, setShowOptions] = useState(false);
  // const [subtaskCount, setSubtaskCount] = useState(1);

  const dispatch = useDispatch();

  // Handlers

  const handleShowOptions = (state: boolean) => {
    setShowOptions(state);
  };
  const handleAddSubtask = () => {
    setTempSubtasks([
      ...tempSubtasks,
      { title: "", completed: false, id: generateId(), taskId },
    ]);
  };

  const handleRemoveSubtask = (id: string) => {
    const removedSub = tempSubtasks.find((sub) => sub.id === id);
    setRemovedSubtasks([...removedSubtasks, removedSub!]);
    setTempSubtasks(tempSubtasks.filter((sub) => sub.id !== id));
  };

  const handleSubtaskChange = (index: number, value: string) => {
    const updatedSubtasks = [...tempSubtasks];
    updatedSubtasks[index] = {
      ...updatedSubtasks[index],
      title: value,
    };
    setTempSubtasks(updatedSubtasks);
  };

  const handleSave = () => {
    // new task Id
    const newTaskId = generateId();
    // Create or Edit Subtasks
    removedSubtasks.map((sub) => dispatch(deleteSubtask(sub.id)));

    tempSubtasks
      // .filter((sub, index) =>
      //   subtasks[index] ? sub.id !== subtasks[index].id : sub
      // )
      .map((sub) => {
        console.log(sub);
        if (subtasks.find((sub2) => sub2.id === sub.id) !== undefined) {
          dispatch(
            editSubtask({
              ...sub,
              taskId: usage === "edit" ? taskId : newTaskId,
            })
          );
        } else {
          dispatch(
            createSubtask({
              ...sub,
              taskId: usage === "edit" ? taskId : newTaskId,
            })
          );
        }
      });

    // Create or Edit the task
    dispatch(
      usage === "edit"
        ? editTask({ id: taskId, description, title, stage, boardId })
        : addTask({
            id: newTaskId,
            description,
            title,
            stage: selectedStage,
            boardId,
          })
    );

    dispatch(toggleEditTaskModal(false));
    dispatch(toggleCreateTaskModal(false));
  };

  const handleInputError = () => {
    title !== "" && setInputError(false);
  };

  return (
    <Modal
      toggle={toggle}
      onClick={(e) => {
        e.stopPropagation();
        handleShowOptions(false);
      }}
    >
      <EditTask children={`${usage === "edit" ? "edit" : "create"} task`} />
      <Wrapper>
        <TaskNameTxt children="taskname" />
        <InputWrapper warning={inputError}>
          <TaskNameInput
            onChange={(e) => {
              setTitle(e.target.value);
              handleInputError();
            }}
            value={title}
            warning={inputError && title === ""}
            placeholder="e.g.Take coffe break"
          />
        </InputWrapper>
      </Wrapper>

      <Wrapper>
        <DescriptionTxt children="description" />

        <DescriptionInput
          onChange={(e) => {
            setDescription(e.target.value);
            handleInputError();
          }}
          value={description}
          placeholder="e.g.It's always good to take a break. This 15 minute break will recharge the batteries a little."
        />
      </Wrapper>

      <Wrapper subtaskWrapper={true}>
        <TaskNameTxt children="subtasks" />
        {tempSubtasks.length > 0 ? (
          tempSubtasks.map((sub, index) => (
            <SubTaskWrapper>
              <SubtaskInput
                key={sub.id}
                value={sub.title}
                onChange={(e) =>
                  handleSubtaskChange(index, e.currentTarget.value)
                }
              />
              <DeleteSubtaskButton
                onClick={() => handleRemoveSubtask(sub.id)}
              />
            </SubTaskWrapper>
          ))
        ) : (
          <NoSubError children="no subtask" />
        )}
      </Wrapper>
      <CreateSubtaskButton
        children="+ add new subtask"
        onClick={handleAddSubtask}
      />

      <Status
        toggleStatus={showOptions}
        handleToggleStatus={handleShowOptions}
        listName={listName}
        stage={stage}
        taskId={taskId}
      />
      <EditTaskButton
        children={`${usage === "edit" ? "edit" : "create"} task`}
        onClick={() => {
          if (title !== "") {
            handleSave();
          } else {
            setInputError(true);
          }
        }}
      />
    </Modal>
  );
}
