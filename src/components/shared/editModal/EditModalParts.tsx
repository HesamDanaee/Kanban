import styled from "styled-components";
import { Theme } from "@/styles/theme";

const EditModalWrapper = styled.div<{
  theme: Theme;
  toggle: boolean;
  header: boolean;
}>`
  width: 150px;
  height: auto;
  position: absolute;
  left: ${({ header }) => header && "10%"};
  right: ${({ header }) => !header && "10%"};
  top: ${({ header }) => (header ? "160%" : "10%")};
  box-shadow: 0px 4px 6px 3px rgba(54, 78, 126, 0.205);
  background-color: ${({ theme }) => theme.bg["blueish-black"]};
  display: ${({ toggle }) => (toggle ? "block" : "none")};
  z-index: 100;
  border-radius: 5px;
`;

const EditModalOption = styled.div<{ theme: Theme; usage?: string }>`
  font-size: 14px;
  text-transform: capitalize;
  color: ${({ usage }) => (usage === "edit" ? "white" : "red")};
  padding: 1rem;
  transition: background-color 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.bg["dark-shade"]};
  }
`;

export { EditModalWrapper, EditModalOption };
