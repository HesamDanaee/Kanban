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

// Custom Hook

import useThemeSwitch from "@/hooks/useThemeSwitch";

function Sidebar({
  toggle,
  handleToggle,
}: {
  toggle: boolean;
  handleToggle: () => void;
}) {
  const { theme, handleSetTheme } = useThemeSwitch();

  return (
    <SidebarBody toogle={toggle}>
      <WrapperUp>
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
      </WrapperUp>
      <WrapperDown>
        <ThemeBox>
          <ThemeLogo src={lightLogo} />
          <SwitchBox onClick={handleSetTheme}>
            <SwitchCircle theme={theme} />
            <ThemeSwitch type="checkbox" disabled />
          </SwitchBox>
          <ThemeLogo src={darkLogo} />
        </ThemeBox>
      </WrapperDown>

      <ToggleButton toggle={toggle} onClick={handleToggle}>
        <ToggleIcon src={toggle ? show : hide} toggle={toggle} />
        <ToggleText children={toggle ? "" : "hide sidebar"} />
      </ToggleButton>
    </SidebarBody>
  );
}

export default Sidebar;
