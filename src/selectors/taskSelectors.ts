import { RootState } from "@/app/store/store";

export const getTasks = (state: RootState) => state.rootReducer.tasks.tasks;
export const getTaskListName = (state: RootState) =>
  state.rootReducer.tasks.taskNamesList;

export const getSubTasks = (state: RootState) =>
  state.rootReducer.tasks.tasks.map((task) => task.subtasks);
