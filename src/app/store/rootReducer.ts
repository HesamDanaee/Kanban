import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "@/features/Tasks/taskSlice";
import subtaskReducer from "@/features/subtasks/subtaskSlice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  subtask: subtaskReducer,
});

export default rootReducer;
