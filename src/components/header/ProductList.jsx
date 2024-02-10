import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaTools } from "react-icons/fa";

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

export default function ProductList() {
  return (
    <List>
      <StyledNavLink to="headless-checkout">
        <Icon>
          <IoBagCheckOutline />
        </Icon>
        <Name>
          Headless Checkout
          <span>
            Place a customizable checkout anywhere your customers are.
          </span>
        </Name>
      </StyledNavLink>
      <StyledNavLink to="dashboard">
        <Icon>
          <MdOutlineSpaceDashboard />
        </Icon>
        <Name>
          Admin dashboard
          <span>Manage products, orders, discounts, customers and more.</span>
        </Name>
      </StyledNavLink>
      <StyledNavLink to="features">
        <Icon>
          <FaTools />
        </Icon>
        <Name>
          Features
          <span>A list of capabilities for our commerce infrastructure.</span>
        </Name>
      </StyledNavLink>
    </List>
  );
}
