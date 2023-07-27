import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DoneTask } from "@/types/newTask.modal";

const initialState: DoneTask[] = [
  {
    id: "8",
    title: "Deploy to production",
    description: "Prepare and deploy the app to the production server",
    subtasks: [
      { id: "21", title: "Set up production environment", completed: true },
      { id: "22", title: "Run production build", completed: true },
      { id: "23", title: "Test production deployment", completed: true },
    ],
  },
  {
    id: "9",
    title: "Write unit tests",
    description: "Create unit tests for critical components",
    subtasks: [
      { id: "24", title: "Write tests for Component X", completed: true },
      { id: "25", title: "Write tests for Component Y", completed: false },
      { id: "26", title: "Write tests for Component Z", completed: false },
    ],
  },
];

const todoSlice = createSlice({
  name: "done",
  initialState,
  reducers: {
    addTodo: (state: DoneTask[], action: PayloadAction<DoneTask>) => {
      state.push(action.payload);
    },
    editTask: (state: DoneTask[], action: PayloadAction<DoneTask>) => {
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
    deleteTask: (state: DoneTask[], action: PayloadAction<DoneTask>) => {
      state = state.filter((task) => task.id === action.payload.id);
    },
  },
});

export const { addTodo, editTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
