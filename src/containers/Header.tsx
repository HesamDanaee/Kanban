import HeaderUI from "@/components/header/HeaderUI";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggleModal = (state: boolean) => {
    setToggle(state);
  };

  return (
    <HeaderUI toggleModal={toggle} handleToggleModal={handleToggleModal} />
  );
}

export default Header;
