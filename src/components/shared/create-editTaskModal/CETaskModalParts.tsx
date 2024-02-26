import styled from "styled-components";
import cross from "@/assets/icon-cross.svg";

const Modal = styled.div<{ theme: Color; toggle: boolean }>`
  width: 450px;
  height: auto;
  padding: 20px 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.secondary};
  display: ${({ toggle }) => (toggle ? "block" : "none")};
  position: fixed;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  z-index: 20;
`;

const EditTask = styled.h1<{ theme: Color }>`
  color: ${({ theme }) => theme.accent};
  font-size: 1.2rem;
  letter-spacing: 1px;
  line-height: 3rem;
  text-transform: capitalize;
  align-self: self-start;
`;

const Wrapper = styled.div<{ subtaskWrapper?: boolean; theme: Color }>`
  width: 100%;
  max-height: ${({ subtaskWrapper }) => subtaskWrapper && "150px"};
  margin: 1rem 0;
  overflow-y: ${({ subtaskWrapper }) => subtaskWrapper && "scroll"};

  &::placeholder {
    font-weight: 600;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${({ theme }) => theme.primary};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 5px;
  }
`;

const SubTaskWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const InputWrapper = styled.span<{ warning: boolean }>`
  width: 100%;
  position: relative;
  display: block;
  margin: 15px 0;
  &::after {
    content: "Cant't be empty";
    width: 95%;
    height: auto;
    padding: 8px 0;
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 13px;
    display: ${({ warning }) => (warning ? "flex" : "none")};
    justify-content: end;
    align-items: center;
    color: #ff5757fb;
  }
`;

const TaskNameInput = styled.input.attrs({
  type: "text",
})<{ theme: Color; warning: boolean }>`
  position: relative;
  border-radius: 3px;
  padding: 8px 7px;
  min-width: 100%;
  outline: none;
  border: 1px solid ${({ warning }) => (warning ? "red" : "#ffffff36")};
  background: none;
  transition: border 0.2s ease-in-out;
  color: ${({ warning }) => (warning ? "red" : "white")};
  font-weight: 300;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.third};
    cursor: text;
  }
  &::placeholder {
    font-weight: 700;
  }
`;

const TaskNameTxt = styled.h3`
  color: white;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

const DescriptionInput = styled.textarea<{ theme: Color }>`
  max-width: 100%;
  min-width: 100%;
  height: 100px;
  max-height: 200px;
  color: ${({ theme }) => theme.primary};
  background: none;
  border-radius: 3px;
  outline: none;
  margin: 15px 0;
  padding: 5px 5px;
  border: 1px solid #ffffff37;
  color: white;
  transition: border 0.2s ease-in-out;
  padding: 10px;
  font-weight: 300;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.third};
    cursor: text;
  }
  &::placeholder {
    font-weight: 700;
  }
`;

const DescriptionTxt = styled(TaskNameTxt)``;

const CreateSubtaskButton = styled.button<{ theme: Color }>`
  width: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.third};
  background-image: linear-gradient(
    to right,
    white 50%,
    ${({ theme }) => theme.third} 50%
  );
  background-size: 200% 100%;
  outline: none;
  border: none;
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: 1px;
  border-radius: 25px;
  margin: 10px 0;
  box-shadow: 0 0 4px 2px #00000018;
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    background-size: 200% 100%;
    color: ${({ theme }) => theme.accent};
    box-shadow: none;
    background-position: -100% 0;
  }
`;

const EditTaskButton = styled(CreateSubtaskButton)<{ theme: Color }>`
  color: ${({ theme }) => theme.accent};
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.third} 50%,
    white 50%
  );
  &:hover {
    color: ${({ theme }) => theme.third};
  }
`;

const SubtaskInput = styled.input.attrs({
  type: "text",
  placeholder: "enter your subtask",
})<{ theme: Color }>`
  width: 80%;
  outline: none;
  border: 1px solid #ffffff36;
  border-radius: 3px;
  background-color: transparent;
  padding: 10px;
  color: ${({ theme }) => theme.accent};
  margin: 4px 0;
  font-weight: 300;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.third};
    cursor: text;
  }
  &::placeholder {
    font-weight: 700;
  }
`;

const DeleteSubtaskButton = styled.img.attrs({ src: cross })`
  width: 15px;
  height: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const NoSubError = styled.h6<{ theme: Color }>`
  font-size: 12px;
  color: ${({ theme }) => theme.third};
  font-weight: 500;
  text-align: center;
  line-height: 80px;
  text-transform: capitalize;
  word-spacing: 3px;
  letter-spacing: 0.05rem;
`;

export {
  Modal,
  EditTask,
  TaskNameInput,
  TaskNameTxt,
  DescriptionInput,
  DescriptionTxt,
  SubtaskInput,
  DeleteSubtaskButton,
  CreateSubtaskButton,
  EditTaskButton,
  Wrapper,
  SubTaskWrapper,
  InputWrapper,
  NoSubError,
};
