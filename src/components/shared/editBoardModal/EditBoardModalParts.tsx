import styled from "styled-components";

import {
  EditTask,
  TaskNameInput,
  TaskNameTxt,
  SubtaskInput,
  DeleteSubtaskButton,
  CreateSubtaskButton,
  EditTaskButton,
  SubTaskWrapper,
} from "@/components/shared/create-editTaskModal/CETaskModalParts";

const EditBoard = styled(EditTask)``;
const BoardNameInput = styled(TaskNameInput)``;
const BoardNameTxt = styled(TaskNameTxt)``;
const BoardColumnWrapper = styled(SubTaskWrapper)``;
const BoardColumnInput = styled(SubtaskInput)``;
const DeleteBoardColumnButton = styled(DeleteSubtaskButton)``;
const CreateBoardButton = styled(CreateSubtaskButton)``;
const SaveChangesBUtton = styled(EditTaskButton)``;

export {
  EditBoard,
  BoardNameInput,
  BoardNameTxt,
  BoardColumnWrapper,
  BoardColumnInput,
  DeleteBoardColumnButton,
  CreateBoardButton,
  SaveChangesBUtton,
};
