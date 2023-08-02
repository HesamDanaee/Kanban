import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  title: string;
  description: string;
  stage: string;
}

export interface TaskState {
  boardName: string;
  tasks: Task[];
  taskNamesList: string[];
}

const initialState: TaskState = {
  boardName: "",
  tasks: [
    {
      id: "4",
      title: "Write documentation",
      description: "Create user documentation for the project",

      stage: "todo",
    },
    {
      id: "5",
      title: "Plan project timeline",
      description: "Create a timeline for project milestones",

      stage: "todo",
    },

    // Tasks for 'doing' stage
    {
      id: "6",
      title: "Implement user authentication",
      description: "Add user authentication to the app",

      stage: "doing",
    },
    {
      id: "7",
      title: "Refactor component structure",
      description: "Improve component organization and hierarchy",

      stage: "doing",
    },

    // Tasks for 'done' stage
    {
      id: "8",
      title: "Deploy to production",
      description: "Prepare and deploy the app to the production server",

      stage: "done",
    },
    {
      id: "9",
      title: "Write unit tests",
      description: "Create unit tests for critical components",

      stage: "done",
    },
  ],
  taskNamesList: ["todo", "doing", "done"],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state: TaskState, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    editTask: (state: TaskState, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            ...action.payload,
          };
        }
        return task;
      });
    },
    deleteTask: (state: TaskState, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((task) => task.id === action.payload.id);
    },
    // editSubTask: (
    //   state: TaskState,
    //   action: PayloadAction<{ subId: string; taskId: string }>
    // ) => {
    //   state.tasks = state.tasks.map((task) => {
    //     if (task.id === action.payload.taskId) {
    //       return {
    //         ...task,
    //         subtasks: task.subtasks.map((subtask) => {
    //           if (subtask.id === action.payload.subId) {
    //             return {
    //               ...subtask,
    //               completed: !subtask.completed,
    //             };
    //           }
    //           return subtask;
    //         }),
    //       };
    //     }
    //     return task;
    //   });
    // },
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
  },
});

export const { addTask, editTask, changeStatus, deleteTask } =
  taskSlice.actions;
export default taskSlice.reducer;
