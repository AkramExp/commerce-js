import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";
// import { FaMicroblog } from "react-icons/fa6";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: white;
  padding: 0.7rem 2rem;
  border-radius: 8px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;

  border-bottom: 1px solid var(--light-blue-3);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    & div {
      background-color: var(--light-blue-1);
    }
  }
`;

const Icon = styled.div`
  padding: 1rem;
  background-color: var(--light-blue-2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--dark-1);
  }
`;

const Name = styled.p`
  color: var(--dark-1);
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;

  & span {
    text-transform: none;
    font-weight: 400;
    font-size: 13px;
    margin-top: 0.6rem;
    color: var(--dark-2);
  }
`;

export default function ResourcesList() {
  return (
    <List>
      <StyledNavLink to="/headless-commerce">
        <Icon>
          <FiShoppingBag />
        </Icon>
        <Name>
          Headless commerce
          <span>
            The modern way to build high performance eCommerce websites.
          </span>
        </Name>
      </StyledNavLink>
      {/* <StyledNavLink>
        <Icon>
          <FaMicroblog />
        </Icon>
        <Name>
          Blog
          <span>
            Learn how to orchestrate, build and control your commerce.
          </span>
        </Name>
      </StyledNavLink> */}
    </List>
  );
}
