import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "@/features/Tasks/taskSlice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
