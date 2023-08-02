import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getTasks } from "@/selectors/taskSelectors";
import { TaskState } from "../Tasks/taskSlice";

interface BoardState {
  [key: string]: TaskState;
}

const initialState: BoardState = {};
