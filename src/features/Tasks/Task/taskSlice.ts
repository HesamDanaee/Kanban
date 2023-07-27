import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

interface Task {
  id: string;
  title: string;
  description: string;
  subtasks: Subtask[];
  stage: string;
}

interface TaskState {
  tasks: Task[];
  taskNamesList: string[];
}

const initialState: TaskState = {
  tasks: [
    {
      id: "4",
      title: "Write documentation",
      description: "Create user documentation for the project",
      subtasks: [
        { id: "9", title: "Write introduction", completed: true },
        { id: "10", title: "Write setup instructions", completed: false },
        { id: "11", title: "Write usage examples", completed: false },
      ],
      stage: "todo",
    },
    {
      id: "5",
      title: "Plan project timeline",
      description: "Create a timeline for project milestones",
      subtasks: [
        { id: "12", title: "Gather requirements", completed: true },
        { id: "13", title: "Estimate project duration", completed: true },
        { id: "14", title: "Create task breakdown", completed: false },
      ],
      stage: "todo",
    },

    // Tasks for 'doing' stage
    {
      id: "6",
      title: "Implement user authentication",
      description: "Add user authentication to the app",
      subtasks: [
        { id: "15", title: "Create login page", completed: true },
        {
          id: "16",
          title: "Implement backend authentication",
          completed: false,
        },
        { id: "17", title: "Add logout functionality", completed: false },
      ],
      stage: "doing",
    },
    {
      id: "7",
      title: "Refactor component structure",
      description: "Improve component organization and hierarchy",
      subtasks: [
        { id: "18", title: "Identify components to refactor", completed: true },
        { id: "19", title: "Extract reusable components", completed: false },
        { id: "20", title: "Update component imports", completed: false },
      ],
      stage: "doing",
    },

    // Tasks for 'done' stage
    {
      id: "8",
      title: "Deploy to production",
      description: "Prepare and deploy the app to the production server",
      subtasks: [
        { id: "21", title: "Set up production environment", completed: true },
        { id: "22", title: "Run production build", completed: true },
        { id: "23", title: "Test production deployment", completed: true },
      ],
      stage: "done",
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
    editSubTask: (
      state: TaskState,
      action: PayloadAction<{ subId: string; taskId: string }>
    ) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.taskId) {
          return {
            ...task,
            subtasks: task.subtasks.map((subtask) => {
              if (subtask.id === action.payload.subId) {
                return {
                  ...subtask,
                  completed: !subtask.completed,
                };
              }
              return subtask;
            }),
          };
        }
        return task;
      });
      console.log(
        state.tasks.filter((task) => task.id === action.payload.taskId)[0]
          .subtasks
      );
    },
  },
});

export const { addTask, editTask, editSubTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
