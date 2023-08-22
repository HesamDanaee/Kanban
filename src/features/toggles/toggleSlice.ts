import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface defaultValuesType {
  openModal: boolean;
  sidebar: boolean;
  theme: string;
  taskModal: boolean;
  createTaskModal: boolean;
  editBoard: boolean;
  editBoardHeader: boolean;
  deleteBoard: boolean;
  editTaskModal: boolean;
  editBoardModal: boolean;
}

const initialState: defaultValuesType = {
  openModal: false,
  sidebar: true,
  theme: "dark",
  taskModal: false,
  createTaskModal: false,
  editBoard: false,
  editBoardHeader: false,
  deleteBoard: false,
  editTaskModal: false,
  editBoardModal: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleModal: (state: defaultValuesType) => {
      state.openModal = !state.openModal;
    },
    toggleTheme: (state: defaultValuesType) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    toggleSidebar: (state: defaultValuesType) => {
      state.sidebar = !state.sidebar;
      console.log(state.sidebar);
    },
    toggleTaskModal: (
      state: defaultValuesType,
      action: PayloadAction<boolean>
    ) => {
      state.taskModal = action.payload;
    },
    toggleCreateTaskModal: (
      state: defaultValuesType,
      action: PayloadAction<boolean>
    ) => {
      state.createTaskModal = action.payload;
    },
    toggleEditBoard: (
      state: defaultValuesType,
      action: PayloadAction<boolean>
    ) => {
      state.editBoard = action.payload;
    },
    toggleEditBoardHeader: (state: defaultValuesType) => {
      state.editBoardHeader = !state.editBoardHeader;
    },
    toggleDeleteBoard: (state: defaultValuesType) => {
      state.deleteBoard = !state.deleteBoard;
    },
    toggleEditTaskModal: (
      state: defaultValuesType,
      action: PayloadAction<boolean>
    ) => {
      state.editTaskModal = action.payload;
    },
    toggleEditBoardModal: (
      state: defaultValuesType,
      action: PayloadAction<boolean>
    ) => {
      state.editBoardModal = action.payload;
    },
  },
});

export default toggleSlice.reducer;

export const {
  toggleSidebar,
  toggleTaskModal,
  toggleCreateTaskModal,
  toggleDeleteBoard,
  toggleEditBoard,
  toggleEditBoardHeader,
  toggleEditTaskModal,
  toggleTheme,
  toggleModal,
  toggleEditBoardModal,
} = toggleSlice.actions;
