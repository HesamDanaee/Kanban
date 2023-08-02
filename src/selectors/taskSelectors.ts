import { RootState } from "@/app/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const getTasks = (state: RootState) => state.rootReducer.tasks.tasks;
export const getTaskListName = (state: RootState) =>
  state.rootReducer.tasks.taskNamesList;

export const getTaskWithid = createSelector(
  [getTasks],
  (tasks) => (taskId: string) => tasks.filter((tasks) => tasks.id === taskId)[0]
);
