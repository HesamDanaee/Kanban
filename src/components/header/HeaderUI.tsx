// Global imports

import { useSelector, useDispatch } from "react-redux";

// Selectors
import { getToggles } from "@/selectors/togglesSelector";

// Actions
import {
  toggleEditBoardHeader,
  toggleCreateTaskModal,
} from "@/features/toggles/toggleSlice";

// Local Components

import {
  HeaderBody,
  Logo,
  BoardName,
  WrapperLeft,
  WrapperRIght,
  NewTask,
} from "./HeaderParts";

import EditModal from "../shared/editModal/EditModal";
import KebabMenu from "../shared/KebabMenu";

// Selectors
import { getSelectedBoard } from "@/selectors/boardSelectors";

// Actions
import {
  toggleEditTaskModal,
  toggleEditBoardModal,
} from "@/features/toggles/toggleSlice";

// Logos
import kLogo from "@/assets/logo-light.svg";
import KebabLogo from "@/assets/icon-vertical-ellipsis.svg";

function HeaderUI() {
  const board = useSelector(getSelectedBoard);

  const { editBoardHeader } = useSelector(getToggles);
  const dispatch = useDispatch();
  return (
    <HeaderBody>
      <WrapperLeft>
        <Logo src={kLogo} />
        <BoardName children={board?.name} />
      </WrapperLeft>
      <WrapperRIght>
        <NewTask
          children="+add new task"
          onClick={() => {
            dispatch(toggleEditTaskModal(false));
            dispatch(toggleCreateTaskModal(true));
          }}
        />
        <KebabMenu
          src={KebabLogo}
          onClick={() => dispatch(toggleEditBoardHeader())}
        />
        <EditModal
          toggle={editBoardHeader}
          header={true}
          onEdit={() => {
            dispatch(toggleEditBoardHeader());
            dispatch(toggleEditBoardModal(true));
          }}
          onDelete={() => dispatch(toggleEditBoardHeader())}
        />
      </WrapperRIght>
    </HeaderBody>
  );
}

export default HeaderUI;
