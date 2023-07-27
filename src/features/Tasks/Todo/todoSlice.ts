import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TodoTask } from "@/types/newTask.modal";

const initialState: TodoTask[] = [
  {
    id: "4",
    title: "Write documentation",
    description: "Create user documentation for the project",
    subtasks: [
      { id: "9", title: "Write introduction", completed: true },
      { id: "10", title: "Write setup instructions", completed: false },
      { id: "11", title: "Write usage examples", completed: false },
    ],
  },
  {
    id: "5",
    title: "Plan project timeline",
    description: "Create a timeline for project milestones",
    subtasks: [
      { id: "12", title: "Gather requirements", completed: true },
      { id: "13", title: "Estimate project duration", completed: true },
      { id: "14", title: "Create task breakdown", completed: false },
    ],
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state: TodoTask[], action: PayloadAction<TodoTask>) => {
      state.push(action.payload);
    },
    editTask: (state: TodoTask[], action: PayloadAction<TodoTask>) => {
      state = state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            ...action.payload,
          };
        }
        return task;
      });
    },
    deleteTask: (state: TodoTask[], action: PayloadAction<TodoTask>) => {
      state = state.filter((task) => task.id === action.payload.id);
    },
  },
});

export const { addTask, editTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
