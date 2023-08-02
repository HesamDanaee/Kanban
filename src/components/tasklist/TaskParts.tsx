import styled from "styled-components";
import { Theme } from "@/styles/theme";

const TaskSection = styled.section<{ theme: Theme; toggle: boolean }>`
  height: calc(100vh - 10vh);
  min-width: 100vw;
  background-color: ${({ theme }) => theme.bg["blueish-black"]};
  position: absolute;
  left: ${({ toggle }) => (toggle ? "0" : "261px")};
  bottom: 0;
  transition: left 0.4s ease-in-out;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem 1rem;
  padding: 0 1rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.bg["steel-blue"]};
    border-radius: 25px;

    &:hover {
      background-color: ${({ theme }) => theme.bg["purplish-blue"]};
      cursor: pointer;
    }
  }
`;

//  Status Components

const StatusWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const ListStatus = styled.h1<{ theme: Theme }>`
  color: ${({ theme }) => theme.bg["steel-blue"]};
  font-size: 12px;
  letter-spacing: 2.4px;
  text-transform: capitalize;
`;

const ListStasusIcon = styled.span<{ status: string; theme: Theme }>`
  display: inline-block;
  margin-right: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ status, theme }) =>
    status === "todo"
      ? theme.status["todo"]
      : status === "doing"
      ? theme.status["doing"]
      : status === "done"
      ? theme.status["done"]
      : ""};
`;

//  Task Components

const TaskList = styled.li`
  padding: 2rem 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskWrapper = styled.div<{ theme: Theme }>`
  width: 280px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg["dark-shade"]};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 1rem 0;
  align-items: flex-start;
  padding: 1.5rem 1rem;
  box-shadow: rgba(54, 78, 126, 0.1) 0px 4px 6px 0px;
  transition: all 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(54, 78, 126, 0.219) 0px 4px 6px 0px;

    > h2 {
      color: ${({ theme }) => theme.colors["purplish-blue"]};
    }
  }
`;

// Heading and P

const TitleTxt = styled.h2<{ theme: Theme; modal: boolean }>`
  font-size: ${({ modal }) => (modal ? "18px" : "15px")};
  font-weight: 600;
  transition: all 0.1s ease-in-out;
  margin-bottom: 0.4rem;
  color: ${({ theme }) => theme.colors["white"]};
`;

const DescriptionTxt = styled.h2<{ theme: Theme }>`
  font-size: 13px;
  font-weight: 600;
  transition: all 0.1s ease-in-out;
  margin: 0.4rem 0;
  color: ${({ theme }) => theme.bg["steel-blue"]};
`;

const Subtasktxt = styled.p<{ theme: Theme; modal: boolean }>`
  font-size: ${({ modal }) => (modal ? "13px" : "12px")};
  color: ${({ theme }) => theme.bg["steel-blue"]};
  font-weight: ${({ modal }) => (modal ? "600" : "600")};
  margin: ${({ modal }) => !modal && " 0.2rem 0"};
`;

//  Modal

const Container = styled.div<{ theme: Theme }>`
  width: 480px;
  background-color: ${({ theme }) => theme.bg["dark-shade"]};
  position: fixed;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  z-index: 20;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;
`;

const ContainerBackspace = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0000006a;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 15;
`;

const WrapperTop = styled.div`
  width: 100%;
  padding: 1rem 0;
  margin: 1rem auto;
`;

//  Subtask, Checkbox

const SubtaskWrapper = styled.div<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.bg["blueish-black"]};
  padding: 0.5rem;
  border-radius: 0.2rem;
  display: flex;
  margin-top: 1rem;
`;

const CheckboxWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const StyledCheckbox = styled.label<{ theme: Theme; completed: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.bg["purplish-blue"]};
  margin-right: 10px;
  border-radius: 0.2rem;
  background-color: ${({ completed }) => completed && "white"};
  &:hover {
    cursor: pointer;
  }
`;

const Subtask = styled.h2<{ completed: boolean }>`
  font-size: 13px;
  color: white;
  text-transform: capitalize;
  font-weight: 600;
  text-decoration: ${({ completed }) => completed && "line-through"};
`;

//  Select Input

const SelectWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const CurrentStatus = styled.h2`
  align-self: flex-start;
  font-size: 12px;
  color: white;
  font-weight: 600;
  text-transform: capitalize;
`;

const StatusSelect = styled.select<{ theme: Theme }>`
  color: #fff;
  width: 100%;
  outline: none;
  border: 1px solid #ffffff81;
  background-color: transparent;
  font-size: 14px;
  text-transform: capitalize;
  padding: 0.5rem;

  margin-top: 0.5rem;
  border-radius: 3px;
  transition: border 0.1s ease;

  &:focus {
    border: 1px solid ${({ theme }) => theme.bg["purplish-blue"]};
  }
  &:hover {
    cursor: pointer;
  }
`;

const OptionWrapper = styled.span<{ theme: Theme }>`
  padding: 2.5rem;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.bg["dark-shade"]};
`;

const StatusOption = styled.option<{ theme: Theme }>`
  padding: 0.5rem;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.bg["dark-shade"]};
  &:hover {
    cursor: pointer;
  }
`;

const NewColumn = styled.article<{ theme: Theme }>`
  width: 280px;
  height: 80vh;
  margin-top: 64px;
  align-self: flex-start;
  background: linear-gradient(
    180deg,
    rgba(43, 44, 55, 0.25),
    rgba(43, 44, 55, 0.125)
  );
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.bg["steel-blue"]};
  &:hover {
    color: ${({ theme }) => theme.colors["purplish-blue"]};
    cursor: pointer;
  }
`;

const NewColumnTxt = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  text-transform: capitalize;
  transition: color 0.1s ease-in;
`;

export {
  TaskSection,
  TaskList,
  StatusWrapper,
  ListStatus,
  ListStasusIcon,
  TaskWrapper,
  TitleTxt,
  DescriptionTxt,
  Subtasktxt,
  Container,
  ContainerBackspace,
  WrapperTop,
  SubtaskWrapper,
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  SelectWrapper,
  Subtask,
  CurrentStatus,
  StatusSelect,
  OptionWrapper,
  StatusOption,
  NewColumn,
  NewColumnTxt,
};
