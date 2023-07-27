import {
  HeaderBody,
  Logo,
  BoardName,
  WrapperLeft,
  WrapperRIght,
  NewTask,
  KebabMenu,
} from "./HeaderParts";

// Logos
import kLogo from "@/assets/logo-light.svg";
import KebabLogo from "@/assets/icon-vertical-ellipsis.svg";

function Header() {
  return (
    <HeaderBody>
      <WrapperLeft>
        <Logo src={kLogo} />
        <BoardName children="platform launch" />
      </WrapperLeft>
      <WrapperRIght>
        <NewTask children="+addnewtask" />
        <KebabMenu src={KebabLogo} />
      </WrapperRIght>
    </HeaderBody>
  );
}

export default Header;
