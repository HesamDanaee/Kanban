import { RootState } from "@/app/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const getTasks = (state: RootState) => state.rootReducer.tasks.tasks;
export const getTaskStageList = (state: RootState) =>
  state.rootReducer.tasks.taskStageList;

export const getTaskWithid = createSelector(
  [getTasks],
  (tasks) => (taskId: string) => tasks.filter((tasks) => tasks.id === taskId)[0]
);

export const getSelectedStage = (state: RootState) =>
  state.rootReducer.tasks.selectedStage;

export const getStages = (state: RootState) =>
  state.rootReducer.tasks.taskStageList;

export const getTaskIds = (state: RootState) =>
  state.rootReducer.tasks.tasks.map((task) => task.id);
