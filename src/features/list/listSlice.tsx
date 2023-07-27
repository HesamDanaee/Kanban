import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TaskReducer from "@/features/Tasks/Task/taskSlice";
import { List } from "@/types/newTask.modal";

const initialState: List[] = [
  {
    id: "1",
    name: "todo",
    list: TaskReducer(undefined, { type: "@@INIT" }),
  },
  {
    id: "1",
    name: "todo",
    list: TaskReducer(undefined, { type: "@@INIT" }),
  },
  {
    id: "1",
    name: "todo",
    list: TaskReducer(undefined, { type: "@@INIT" }),
  },
];

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addList: (state: List[], action: PayloadAction<List>) => {
      state = [...state, action.payload];
    },
  },
});

export const { addList } = listSlice.actions;
export default listSlice.reducer;
