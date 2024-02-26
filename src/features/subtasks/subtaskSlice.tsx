import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { generateId } from "@/utils/helpers";
import { SubtaskT } from "@/types/newTask";

interface SubtaskState {
  subtasks: SubtaskT[];
}

const initialState: SubtaskState = {
  subtasks: [
    {
      id: generateId(),
      title: "Write introduction",
      completed: true,
      taskId: "1",
    },
    {
      id: generateId(),
      title: "Write setup instructions",
      completed: false,
      taskId: "1",
    },
    {
      id: generateId(),
      title: "Write usage examples",
      completed: false,
      taskId: "1",
    },
    {
      id: generateId(),
      title: "Gather requirements",
      completed: true,
      taskId: "2",
    },
    {
      id: generateId(),
      title: "Estimate project duration",
      completed: true,
      taskId: "2",
    },
    {
      id: generateId(),
      title: "Create task breakdown",
      completed: false,
      taskId: "2",
    },
    {
      id: generateId(),
      title: "Create login page",
      completed: true,
      taskId: "3",
    },
    {
      id: generateId(),
      title: "Implement backend authentication",
      completed: false,
      taskId: "3",
    },
    {
      id: generateId(),
      title: "Add logout functionality",
      completed: false,
      taskId: "3",
    },
    {
      id: generateId(),
      title: "Identify components to refactor",
      completed: true,
      taskId: "4",
    },
    {
      id: generateId(),
      title: "Extract reusable components",
      completed: false,
      taskId: "4",
    },
    {
      id: generateId(),
      title: "Update component imports",
      completed: false,
      taskId: "4",
    },
    {
      id: generateId(),
      title: "Set up production environment",
      completed: true,
      taskId: "5",
    },
    {
      id: generateId(),
      title: "Run production build",
      completed: true,
      taskId: "5",
    },
    {
      id: generateId(),
      title: "Test production deployment",
      completed: true,
      taskId: "5",
    },
    {
      id: generateId(),
      title: "Write tests for Component X",
      completed: true,
      taskId: "6",
    },
    {
      id: generateId(),
      title: "Write tests for Component Y",
      completed: false,
      taskId: "6",
    },
    {
      id: generateId(),
      title: "Write tests for Component Z",
      completed: false,
      taskId: "6",
    },
  ],
};

const subtaskSlice = createSlice({
  name: "subtask",
  initialState,
  reducers: {
    createSubtask: (state: SubtaskState, action: PayloadAction<SubtaskT>) => {
      state.subtasks = state.subtasks.concat({
        ...action.payload,
        id: generateId(),
      });
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
