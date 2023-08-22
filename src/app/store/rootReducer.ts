import { combineReducers } from "@reduxjs/toolkit";
import boardReducer from "@/features/board/boardSlice";
import tasksReducer from "@/features/Tasks/taskSlice";
import subtaskReducer from "@/features/subtasks/subtaskSlice";
import toggleReducer from "@/features/toggles/toggleSlice";

const rootReducer = combineReducers({
  boards: boardReducer,
  tasks: tasksReducer,
  subtask: subtaskReducer,
  toggles: toggleReducer,
});

export default rootReducer;
