import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DoneTask {
  id: string;
  title: string;
  description: string;
}

interface DoneState {
  doneTasks: DoneTask[];
}

const initialState: DoneState = {
  doneTasks: [],
};

const doneSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoTask: (state: DoneState, action: PayloadAction<DoneTask>) => {
      state.doneTasks.push(action.payload);
    },
  },
});

export const { addTodoTask } = doneSlice.actions;
export default doneSlice.reducer;
