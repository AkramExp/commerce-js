import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import ProductList from "../components/header/ProductList";
import DevelopersList from "../components/header/DevelopersList";
import ResourcesList from "../components/header/ResourcesList";

const StyledHeaderMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const StyledNavLinks = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  color: var(--dark-2);
  text-decoration: none;
  padding: 1rem 0.8rem;
  &:hover {
    color: var(--blue-2);
  }
`;

const SignUp = styled(NavLink)`
  background-color: var(--dark-1);
  color: white;
  padding: 1rem;
  margin-left: 5px;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background-color: var(--dark-2);
  }
`;

export default function HeaderMenu() {
  return (
    <Modal>
      <StyledHeaderMenu>
        <Modal.Open opens="products">
          <StyledNavLinks>Product</StyledNavLinks>
        </Modal.Open>
        <Modal.Window name="products">
          <ProductList />
        </Modal.Window>

        <StyledNavLinks to="integrations">Integrations</StyledNavLinks>

        <StyledNavLinks to="/how-commercejs-works">How it works</StyledNavLinks>

        <Modal.Open opens="developers">
          <StyledNavLinks>Developers</StyledNavLinks>
        </Modal.Open>
        <Modal.Window name="developers">
          <DevelopersList />
        </Modal.Window>

        <StyledNavLinks to="/pricing">Pricing</StyledNavLinks>

        <Modal.Open opens="resources">
          <StyledNavLinks>Resources</StyledNavLinks>
        </Modal.Open>
        <Modal.Window name="resources">
          <ResourcesList />
        </Modal.Window>

        <StyledNavLinks to="/login">Login</StyledNavLinks>

        <SignUp to="/signup">Sign up</SignUp>
      </StyledHeaderMenu>
    </Modal>
  );
}
