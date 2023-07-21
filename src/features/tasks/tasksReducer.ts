import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Task, Tasks } from "@/types/newTask.modal";

const initialState: Tasks = {
  tasks: {
    todo: [],
    doing: [],
    done: [],
  },
};

interface addTaskPayload {
  type: string;
  payload: Task;
}

interface removeTaskPayload {
  type: string;
  payload: {
    task: Task;
    category: string;
    index: number;
  };
}

export const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state: Tasks, payloadAction: addTaskPayload) => {
      state.tasks.todo.push(payloadAction.payload);
    },
    removeTaskFromDoing: (state: Tasks, payloadAction: removeTaskPayload) => {
      const { index: itemIndex } = payloadAction.payload;
      state.tasks.doing.filter((item, index) => index !== itemIndex);
    },
  },
});
