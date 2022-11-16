import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const SuscriptionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => {
    setIsOpen(false);
    console.log("cerrando modal");
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onCloseModal} style={customStyles}>
      <h1>HOLA MUNDO</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur
      </p>
    </Modal>
  );
};

export default SuscriptionModal;
