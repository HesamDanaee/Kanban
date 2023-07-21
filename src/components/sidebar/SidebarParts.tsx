import styled from "styled-components";
import { Theme } from "@/styles/theme";

const SidebarBody = styled.section<{
  theme: Theme;
  left: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 261px;
  width: 261px;
  min-height: 90vh;
  height: 90vh;
  position: absolute;
  left: ${({ left }) => left};
  bottom: 0;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.bg["dark-shade"]};
`;

const AllBoardsText = styled.h3<{ theme: Theme }>`
  font-size: 12px;
  letter-spacing: 3px;
  padding-left: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => theme.colors["white"]};
`;

const Logo = styled.div<{ url: string }>`
  width: 100%;
  padding: 1rem;
  padding-right: 2rem;
  background-image: ${({ url }) => url};
`;

const List = styled.ul`
  margin: 2rem 0;
  list-style: none;
`;

const Listitem = styled.li`
  padding: 1px 0;
`;

const Board = styled.div<{ theme: Theme; selected?: boolean }>`
  width: calc(261px - 20px);
  background-color: ${({ theme, selected }) =>
    selected && theme.bg["purplish-blue"]};
  padding: 1rem 0;
  border-radius: 0 100px 100px 0;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.bg["white"]};
  justify-content: flex-start;
  transition: all 0.4s ease;
  transition-property: background-color, color;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.bg["white"]};
    color: ${({ theme }) => theme.bg["purplish-blue"]};
  }
`;

const BoardText = styled.h2<{ theme: Theme }>`
  font-size: 15px;
  font-weight: medium;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: capitalize;
`;

const BoardIcon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 1.4rem;
`;

const ThemeBox = styled.div<{ theme: Theme }>`
  width: calc(261px - 20%);
  padding: 0.5rem0 1.5rem;
  background-color: ${({ theme }) => theme.bg["blueish-black"]};
  align-self: center;
  padding: 0.8rem 1rem;
  display: flex;
  place-items: center;
  justify-content: space-around;
  border-radius: 10px;
`;

const SwitchBox = styled.label<{ theme: Theme }>`
  position: relative;
  display: inline-block;
  background-color: ${({ theme }) => theme.bg["purplish-blue"]};
  width: 50px;
  border-radius: 100px;
  padding: 0.1rem 0;
  &:hover {
    cursor: pointer;
  }
`;

const ThemeSwitch = styled.input`
  visibility: hidden;
`;

const SwitchCircle = styled.span<{ theme: string }>`
  display: inline-block;
  position: absolute;
  transition: left 0.2s ease-in-out;
  left: ${({ theme }) => (theme === "light" ? "10%" : "60%")};
  top: 50%;
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 50%;
  translate: 0 -50%;
`;

const ThemeLogo = styled.img`
  width: 20px;
  height: 20px;
`;

export {
  SidebarBody,
  Logo,
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
};