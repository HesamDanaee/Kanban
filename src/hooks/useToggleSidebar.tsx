import { useState } from "react";

function useToggleSidebar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return { toggle, handleToggle };
}

export default useToggleSidebar;
