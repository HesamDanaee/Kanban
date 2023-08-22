// Global Imports
import { useSelector, useDispatch } from "react-redux";
import { generateId } from "@/utils/helpers";

// Component Parts

import {
  SidebarBody,
  List,
  Listitem,
  Board,
  BoardIcon,
  BoardText,
  ThemeBox,
  SwitchBox,
  SwitchCircle,
  ThemeLogo,
  ThemeSwitch,
  AllBoardsText,
  ToggleButton,
  ToggleIcon,
  ToggleText,
  WrapperUp,
  WrapperDown,
} from "./SidebarParts";

// Logos
import boardIcon from "@/assets/icon-board.svg";
import lightLogo from "@/assets/icon-light-theme.svg";
import darkLogo from "@/assets/icon-dark-theme.svg";
import hide from "@/assets/icon-hide-sidebar.svg";
import show from "@/assets/icon-show-sidebar.svg";

// Selectors

import { getToggles } from "@/selectors/togglesSelector";
import { getBoards, getSelectedBoardId } from "@/selectors/boardSelectors";

// Actions
import { toggleSidebar, toggleTheme } from "@/features/toggles/toggleSlice";
import { setSelectedBoard } from "@/features/board/boardSlice";

function Sidebar() {
  const { sidebar, theme } = useSelector(getToggles);
  const boards = useSelector(getBoards);
  const selectedBoard = useSelector(getSelectedBoardId);
  const dispatch = useDispatch();

  return (
    <SidebarBody toogle={sidebar}>
      {/* Board List */}
      <WrapperUp>
        <AllBoardsText
          color="white"
          children={`All Boards (${boards.length})`}
        />
        <List>
          {boards.map((board) => (
            <Listitem>
              <Board
                color="black"
                key={generateId()}
                selected={board.id === selectedBoard}
                onClick={() => dispatch(setSelectedBoard(board.id))}
              >
                <BoardIcon src={boardIcon} />
                <BoardText children={board.name} />
              </Board>
            </Listitem>
          ))}
        </List>
      </WrapperUp>

      {/* Rest of the sidebar */}
      <WrapperDown>
        <ThemeBox>
          <ThemeLogo src={lightLogo} />
          <SwitchBox onClick={() => dispatch(toggleTheme())}>
            <SwitchCircle theme={theme} />
            <ThemeSwitch type="checkbox" disabled />
          </SwitchBox>
          <ThemeLogo src={darkLogo} />
        </ThemeBox>
      </WrapperDown>

      <ToggleButton toggle={sidebar} onClick={() => dispatch(toggleSidebar())}>
        <ToggleIcon src={sidebar ? show : hide} toggle={sidebar} />
        <ToggleText children={sidebar ? "" : "hide sidebar"} />
      </ToggleButton>
    </SidebarBody>
  );
}

export default Sidebar;
