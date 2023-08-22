// Global Imports

import { useState } from "react";
import { useSelector } from "react-redux";

//  Local Imports

import TaskListSection from "@/components/tasklist/TaskListSection";

// Redux Actions

import {
  getTasks,
  getTaskStageList,
  getTaskWithid,
} from "@/selectors/taskSelectors";

// Redux Selectors
import { getSubTasks } from "@/selectors/subtaskSelectors";
import { getSelectedBoardId } from "@/selectors/boardSelectors";

// Custom Hooks

function TaskBody() {
  const [selectedTask, setSelectedTask] = useState<string>("");

  // Redux State
  const selectedBoard = useSelector(getSelectedBoardId);
  const tasks = useSelector(getTasks).filter(
    (task) => task.boardId === selectedBoard
  );
  const subtasks = useSelector(getSubTasks);
  const taskListName = useSelector(getTaskStageList).filter(
    (stage) => stage.name
  );
  const taskWithId = useSelector(getTaskWithid)(selectedTask);

  const handleSelectedTask = (id: string) => {
    setSelectedTask(id);
  };

  return (
    <TaskListSection
      taskStageList={taskListName}
      tasks={tasks}
      subtasks={subtasks}
      selectedTask={taskWithId}
      setSelectedTask={handleSelectedTask}
    />
  );
}

export default TaskBody;
