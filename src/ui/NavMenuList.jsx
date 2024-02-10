import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useContext, useState } from "react";
import { NavContext } from "../context/NavContext";

const Div = styled.div`
  position: absolute;
  top: 5rem;
  right: 0;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: white;
  border-radius: 7px;
  margin: 0;
  padding: 1rem;
  box-shadow: var(--shadow);
`;

const StyledNavLinks = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 16px;
  font-weight: 500;
  color: var(--dark-1);
  text-decoration: none;
  padding: 1rem 0.8rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  &:hover {
    color: var(--blue-2);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const SignUp = styled(NavLink)`
  text-align: center;
  background-color: var(--dark-1);
  color: white;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background-color: var(--dark-2);
  }
`;

const SubList = styled.ul`
  margin-top: 1rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    text-decoration: none;
    color: var(--dark-1);
    font-weight: 400;
  }
`;

export default function NavMenuList() {
  const [product, setProduct] = useState(false);
  const [developers, setDevelopers] = useState(false);
  const [resources, setResources] = useState(false);
  const { toggleMenu } = useContext(NavContext);

  return (
    <Div>
      <List>
        <StyledNavLinks onClick={() => setProduct((product) => !product)}>
          <div>Products {product ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
          {product && (
            <SubList>
              <NavLink to="/headless-checkout" onClick={toggleMenu}>
                Headless Checkout
              </NavLink>
              <NavLink to="/dashboard" onClick={toggleMenu}>
                Admin Dashboard
              </NavLink>
              <NavLink to="/features" onClick={toggleMenu}>
                Features
              </NavLink>
            </SubList>
          )}
        </StyledNavLinks>
        <StyledNavLinks to="/integrations" onClick={toggleMenu}>
          Integrations
        </StyledNavLinks>
        <StyledNavLinks to="/how-commercejs-works" onClick={toggleMenu}>
          How it works
        </StyledNavLinks>
        <StyledNavLinks
          onClick={() => setDevelopers((developers) => !developers)}
        >
          <div>
            Developers {developers ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {developers && (
            <SubList>
              <NavLink to="/commerce-api" onClick={toggleMenu}>
                Commerce APIs
              </NavLink>
              <NavLink to="/frameworks" onClick={toggleMenu}>
                Javascript Frameworks
              </NavLink>
              <NavLink to="/jamstack" onClick={toggleMenu}>
                Jamstack Commerce
              </NavLink>
            </SubList>
          )}
        </StyledNavLinks>
        <StyledNavLinks to="/pricing" onClick={toggleMenu}>
          Pricing
        </StyledNavLinks>
        <StyledNavLinks onClick={() => setResources((resources) => !resources)}>
          <div>
            Resources {resources ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {resources && (
            <SubList>
              <NavLink to="/headless-commerce" onClick={toggleMenu}>
                Headless Commerce
              </NavLink>
            </SubList>
          )}
        </StyledNavLinks>
        <StyledNavLinks to="/login" onClick={toggleMenu}>
          Login
        </StyledNavLinks>
        <SignUp to="/signup" onClick={toggleMenu}>
          Signup
        </SignUp>
      </List>
    </Div>
  );
}
