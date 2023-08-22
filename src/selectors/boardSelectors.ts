import { RootState } from "@/app/store/store";

export const getBoards = (state: RootState) => state.rootReducer.boards.boards;
export const getSelectedBoardId = (state: RootState) =>
  state.rootReducer.boards.selected;

export const getSelectedBoard = (state: RootState) =>
  state.rootReducer.boards.boards.find(
    (board) => board.id === state.rootReducer.boards.selected
  );
