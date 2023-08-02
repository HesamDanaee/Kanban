import { RootState } from "@/app/store/store";

export const getSubTasks = (state: RootState) =>
  state.rootReducer.subtask.subtasks;
