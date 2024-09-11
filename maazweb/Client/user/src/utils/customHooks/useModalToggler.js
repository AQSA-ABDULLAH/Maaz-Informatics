import { useState } from "react";

function useModalToggler() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((curr) => (curr ? false : true));
  };
  return { isOpen, setIsOpen, toggleIsOpen };
}
export default useModalToggler;
