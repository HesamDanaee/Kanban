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
} from "./SidebarParts";

// Logos
import boardIcon from "@/assets/icon-board.svg";
import lightLogo from "@/assets/icon-light-theme.svg";
import darkLogo from "@/assets/icon-dark-theme.svg";

// Custom Hook

import useThemeSwitch from "@/hooks/useThemeSwitch";

function Sidebar() {
  const { theme, handleSetTheme } = useThemeSwitch();

  return (
    <SidebarBody left={`${0}`}>
      <div>
        <AllBoardsText color="white" children={`All Boards ${1}`} />
        <List>
          <Listitem>
            <Board color="black" selected>
              <BoardIcon src={boardIcon} />
              <BoardText children=" Platform Launch" />
            </Board>
          </Listitem>
          <Listitem>
            <Board color="black">
              <BoardIcon src={boardIcon} />
              <BoardText children="Marketing Plan" />
            </Board>
          </Listitem>
          <Listitem>
            <Board color="black">
              <BoardIcon src={boardIcon} />
              <BoardText children="Roadmap" />
            </Board>
          </Listitem>
          <Listitem>
            <Board color="black">
              <BoardIcon src={boardIcon} />
              <BoardText children="info go here" />
            </Board>
          </Listitem>
        </List>
      </div>

      <ThemeBox>
        <ThemeLogo src={lightLogo} />
        <SwitchBox onClick={handleSetTheme}>
          <SwitchCircle theme={theme} />
          <ThemeSwitch type="checkbox" disabled />
        </SwitchBox>
        <ThemeLogo src={darkLogo} />
      </ThemeBox>
    </SidebarBody>
  );
}

export default Sidebar;
