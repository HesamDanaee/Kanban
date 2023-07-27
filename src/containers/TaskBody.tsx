import TaskListSection from "@/components/tasklist/TaskListSection";
// Global Imports
import { useState } from "react";
import { useSelector } from "react-redux";
// Redux Actions

import {
  getTasks,
  getTaskListName,
  getTaskWithid,
} from "@/selectors/taskSelectors";

function TaskBody({ toggle }: { toggle: boolean }) {
  const [selectedTask, setSelectedTask] = useState<string>("");
  const [openModal, setOpenModal] = useState(false);

  // Redux State
  const tasks = useSelector(getTasks);
  const taskListName = useSelector(getTaskListName);
  const taskWithId = useSelector(getTaskWithid)(selectedTask);

  const toggleModal = (state: boolean) => {
    setOpenModal(state);
  };

  const handleSelectedTask = (id: string) => {
    setSelectedTask(id);
  };

  return (
    <>
      <TaskListSection
        taskListName={taskListName}
        tasks={tasks}
        toggleModal={toggleModal}
        openModal={openModal}
        selectedTask={taskWithId}
        setSelectedTask={handleSelectedTask}
        toggle={toggle}
      />
    </>
  );
}

export default TaskBody;
