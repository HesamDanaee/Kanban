import { useState, useEffect, useRef } from "react";

function useToggleModal() {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle clicks outside the modal
  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  // Function to show the modal
  const showModal = () => {
    setIsOpen(true);
  };

  // Function to hide the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Add click event listener when the modal is open
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      // Remove the click event listener when the modal is closed
      document.removeEventListener("click", handleOutsideClick);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);
}

export default useToggleModal;
