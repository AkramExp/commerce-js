import { useContext } from "react";
import { cloneElement } from "react";
import { useState } from "react";
import { createContext } from "react";
import styled from "styled-components";

const ModalContext = createContext();

const StyledModal = styled.div`
  position: fixed;
  box-shadow: 0px 0px 2px var(--grey-1);
  padding: 0;
  margin: 0;
  width: 32%;
  border-radius: 8px;

  top: ${(props) => props.position.y}px;
  left: ${(props) => props.position.x}px;
`;

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const [position, setPosition] = useState(null);

  const openModal = setOpenName;
  const closeModal = () => setOpenName("");

  return (
    <ModalContext.Provider
      value={{ openName, openModal, closeModal, position, setPosition }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { openModal, closeModal, setPosition } = useContext(ModalContext);

  function handleHover(e) {
    e.stopPropagation();
    openModal(opens);
    const rect = e.target.closest("a").getBoundingClientRect();
    setPosition({ x: rect.left - 200, y: rect.bottom });
  }

  return cloneElement(children, {
    onMouseEnter: handleHover,
    onMouseLeave: closeModal,
  });
}

function Window({ children, name }) {
  const { openModal, closeModal, openName, position } =
    useContext(ModalContext);

  if (name !== openName) return null;

  return (
    <StyledModal
      position={position}
      onMouseEnter={() => openModal(name)}
      onMouseLeave={closeModal}
    >
      {children}
    </StyledModal>
  );
}

Modal.Open = Open;
Modal.Window = Window;
