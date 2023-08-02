import {
  HeaderBody,
  Logo,
  BoardName,
  WrapperLeft,
  WrapperRIght,
  NewTask,
  KebabMenu,
} from "./HeaderParts";

import EditModal from "../shared/editModal/EditModal";

// Logos
import kLogo from "@/assets/logo-light.svg";
import KebabLogo from "@/assets/icon-vertical-ellipsis.svg";

function HeaderUI({
  toggleModal,
  handleToggleModal,
}: {
  toggleModal: boolean;
  handleToggleModal: (state: boolean) => void;
}) {
  return (
    <HeaderBody>
      <WrapperLeft>
        <Logo src={kLogo} />
        <BoardName children="platform launch" />
      </WrapperLeft>
      <WrapperRIght>
        <NewTask children="+addnewtask" />
        <KebabMenu
          src={KebabLogo}
          onClick={() => handleToggleModal(!toggleModal)}
        />
        <EditModal toggle={toggleModal} />
      </WrapperRIght>
    </HeaderBody>
  );
}

export default HeaderUI;
