import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateId } from "@/utils/helpers";
interface Task {
  id: string;
  boardId: string;
  title: string;
  description: string;
  stage: string;
}

export interface Stage {
  name: string;
  boardId: string;
  id: string;
}

export interface TaskState {
  tasks: Task[];
  taskStageList: Stage[];
  selectedStage: string;
}

const initialState: TaskState = {
  tasks: [
    {
      id: "1",
      boardId: "board-1",
      title: "Write documentation",
      description: "Create user documentation for the project",
      stage: "todo",
    },
    {
      id: "2",
      boardId: "board-1",
      title: "Plan project timeline",
      description: "Create a timeline for project milestones",
      stage: "todo",
    },

    // Tasks for 'doing' stage
    {
      id: "3",
      boardId: "board-1",
      title: "Implement user authentication",
      description: "Add user authentication to the app",
      stage: "doing",
    },
    {
      id: "4",
      boardId: "board-1",
      title: "Refactor component structure",
      description: "Improve component organization and hierarchy",
      stage: "doing",
    },

    // Tasks for 'done' stage
    {
      id: "5",
      boardId: "board-1",
      title: "Deploy to production",
      description: "Prepare and deploy the app to the production server",
      stage: "done",
    },
    {
      id: "6",
      boardId: "board-1",
      title: "Write unit tests",
      description: "Create unit tests for critical components",
      stage: "done",
    },
    {
      id: "7",
      boardId: "board-2",
      title: "Write documentation",
      description: "Create user documentation for the project",
      stage: "todo",
    },
    {
      id: "8",
      boardId: "board-2",
      title: "Plan project timeline",
      description: "Create a timeline for project milestones",
      stage: "todo",
    },

    // Tasks for 'doing' stage
    {
      id: "9",
      boardId: "board-2",
      title: "Implement user authentication",
      description: "Add user authentication to the app",
      stage: "doing",
    },
    {
      id: "10",
      boardId: "board-2",
      title: "Refactor component structure",
      description: "Improve component organization and hierarchy",
      stage: "doing",
    },

    // Tasks for 'done' stage
    {
      id: "11",
      boardId: "board-2",
      title: "Deploy to production",
      description: "Prepare and deploy the app to the production server",
      stage: "done",
    },
    {
      id: "12",
      boardId: "board-2",
      title: "Write unit tests",
      description: "Create unit tests for critical components",
      stage: "done",
    },
  ],
  taskStageList: [
    { name: "todo", boardId: "board-1", id: generateId() },
    { name: "doing", boardId: "board-1", id: generateId() },
    { name: "done", boardId: "board-1", id: generateId() },
    { name: "todo", boardId: "board-2", id: generateId() },
    { name: "doing", boardId: "board-2", id: generateId() },
    { name: "done", boardId: "board-2", id: generateId() },
    { name: "new", boardId: "board-3", id: generateId() },
  ],
  selectedStage: "todo",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state: TaskState, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.concat({ ...action.payload });
    },
    editTask: (state: TaskState, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            title: action.payload.title,
            description: action.payload.description,
            stage: action.payload.stage || task.stage,
          };
        }
        return task;
      });
    },
    deleteTask: (state: TaskState, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },

    changeStatus: (
      state: TaskState,
      action: PayloadAction<{ status: string; taskId: string }>
    ) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.taskId) {
          return {
            ...task,
            stage: action.payload.status,
          };
        }
        return task;
      });
    },
    setSelectedStage: (state: TaskState, action: PayloadAction<string>) => {
      state.selectedStage = action.payload;
    },
    addColumn: (state: TaskState, action: PayloadAction<Stage>) => {
      state.taskStageList = state.taskStageList.concat(action.payload);
      console.log(state.taskStageList);
    },
    deleteColumn: (state: TaskState, action: PayloadAction<string>) => {
      state.taskStageList = state.taskStageList.filter(
        (col) => col.id !== action.payload
      );
    },
    changeColumn: (state: TaskState, action: PayloadAction<Stage>) => {
      state.taskStageList = state.taskStageList.map((stage) =>
        stage.id === action.payload.id ? action.payload : stage
      );
    },
  },
});

export const {
  addTask,
  editTask,
  changeStatus,
  deleteTask,
  setSelectedStage,
  addColumn,
  deleteColumn,
  changeColumn,
} = taskSlice.actions;
export default taskSlice.reducer;
