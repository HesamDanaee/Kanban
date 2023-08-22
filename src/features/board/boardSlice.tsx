import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BoardType {
  name: string;
  id: string;
}

interface BoardState {
  selected: string;
  boards: BoardType[];
}

const initialState: BoardState = {
  selected: "board-1",
  boards: [
    {
      name: "platform launch",
      id: "board-1",
    },
    {
      name: "Marketing Plan",
      id: "board-2",
    },
    {
      name: "Roadmap",
      id: "board-3",
    },
  ],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    createBoard: (state: BoardState, action: PayloadAction<BoardType>) => {
      state.boards.push(action.payload);
    },
    deleteBoard: (state: BoardState, action: PayloadAction<string>) => {
      state.boards = state.boards.filter(
        (board) => board.id !== action.payload
      );
    },
    changeBoard: (state: BoardState, action: PayloadAction<BoardType>) => {
      state.boards = state.boards.map((board) =>
        board.id === action.payload.id ? action.payload : board
      );
    },
    setSelectedBoard: (state: BoardState, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
  },
});

export default boardsSlice.reducer;

export const { createBoard, deleteBoard, setSelectedBoard, changeBoard } =
  boardsSlice.actions;
