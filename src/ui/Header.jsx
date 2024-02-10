import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import NavMenuList from "./NavMenuList";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 2;
  transition: all 0.5s;
  display: flex;
  align-items: center;
`;

const StyledHeader = styled.header`
  width: 73.7%;
  position: fixed;
  top: 1.5rem;

  background-color: white;
  padding: 1rem;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  box-shadow: var(--shadow);
`;

const MenuButton = styled.button`
  border: none;
  background: none;
  display: none;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export default function Header() {
  const { isOpen, toggleMenu, closeMenu } = useContext(NavContext);

  return (
    <>
      <StyledHeader>
        <NavLink to="/" onClick={closeMenu}>
          <Logo />
        </NavLink>
        <MenuButton onClick={toggleMenu}>
          {!isOpen && <RxHamburgerMenu />}
          {isOpen && <RxCross2 />}
        </MenuButton>
        <HeaderMenu />
        {isOpen && <NavMenuList />}
      </StyledHeader>
      {isOpen && <Overlay></Overlay>}
    </>
  );
}
