import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SubtaskT } from "@/types/newTask.modal";

interface SubtaskState {
  subtasks: SubtaskT[];
}

const initialState: SubtaskState = {
  subtasks: [
    { id: "9", title: "Write introduction", completed: true, taskId: "4" },
    {
      id: "10",
      title: "Write setup instructions",
      completed: false,
      taskId: "4",
    },
    { id: "11", title: "Write usage examples", completed: false, taskId: "4" },
    { id: "12", title: "Gather requirements", completed: true, taskId: "5" },
    {
      id: "13",
      title: "Estimate project duration",
      completed: true,
      taskId: "5",
    },
    { id: "14", title: "Create task breakdown", completed: false, taskId: "5" },
    { id: "15", title: "Create login page", completed: true, taskId: "6" },
    {
      id: "16",
      title: "Implement backend authentication",
      completed: false,
      taskId: "6",
    },
    {
      id: "17",
      title: "Add logout functionality",
      completed: false,
      taskId: "6",
    },
    {
      id: "18",
      title: "Identify components to refactor",
      completed: true,
      taskId: "7",
    },
    {
      id: "19",
      title: "Extract reusable components",
      completed: false,
      taskId: "7",
    },
    {
      id: "20",
      title: "Update component imports",
      completed: false,
      taskId: "7",
    },
    {
      id: "21",
      title: "Set up production environment",
      completed: true,
      taskId: "8",
    },
    { id: "22", title: "Run production build", completed: true, taskId: "8" },
    {
      id: "23",
      title: "Test production deployment",
      completed: true,
      taskId: "8",
    },
    {
      id: "24",
      title: "Write tests for Component X",
      completed: true,
      taskId: "9",
    },
    {
      id: "25",
      title: "Write tests for Component Y",
      completed: false,
      taskId: "9",
    },
    {
      id: "26",
      title: "Write tests for Component Z",
      completed: false,
      taskId: "9",
    },
  ],
};

const subtaskSlice = createSlice({
  name: "subtask",
  initialState,
  reducers: {
    createSubtask: (state: SubtaskState, action: PayloadAction<SubtaskT>) => {
      state.subtasks = state.subtasks.concat(action.payload);
    },
    deleteSubtask: (state: SubtaskState, action: PayloadAction<string>) => {
      state.subtasks = state.subtasks.filter(
        (sub) => sub.id !== action.payload
      );
    },
    editSubtask: (state: SubtaskState, action: PayloadAction<SubtaskT>) => {
      state.subtasks = state.subtasks.map((sub) =>
        sub.id === action.payload.id ? action.payload : sub
      );
    },
    checkSubtask: (state: SubtaskState, action: PayloadAction<string>) => {
      state.subtasks = state.subtasks.map((sub) => {
        console.log(sub);
        return sub.id === action.payload
          ? { ...sub, completed: !sub.completed }
          : sub;
      });
    },
  },
});

export const { createSubtask, deleteSubtask, editSubtask, checkSubtask } =
  subtaskSlice.actions;

export default subtaskSlice.reducer;
