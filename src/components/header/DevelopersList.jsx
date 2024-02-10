import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { IoCodeSlash } from "react-icons/io5";
import { TbBrandZapier } from "react-icons/tb";
import { CiViewList } from "react-icons/ci";
import { GoStack } from "react-icons/go";

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

export default function DevelopersList() {
  return (
    <List>
      {/* <StyledNavLink>
        <Icon>
          <IoCodeSlash />
        </Icon>
        <Name>
          Documentation
          <span>Commerce SDK and APIs for developers.</span>
        </Name>
      </StyledNavLink> */}
      <StyledNavLink to="/commerce-api">
        <Icon>
          <TbBrandZapier />
        </Icon>
        <Name>
          Commerce apis
          <span>
            Our unified suite of Commerce APIs for products, cart, checkout and
            more.
          </span>
        </Name>
      </StyledNavLink>
      <StyledNavLink to="/frameworks">
        <Icon>
          <CiViewList />
        </Icon>
        <Name>
          Javascript frameworks
          <span>
            Commerce build for modern web and your frontend framework of choice.
          </span>
        </Name>
      </StyledNavLink>
      <StyledNavLink to="/jamstack">
        <Icon>
          <GoStack />
        </Icon>
        <Name>
          Jamstack commerce
          <span>
            Build the fastest websites with Javascript, APIs and markup.
          </span>
        </Name>
      </StyledNavLink>
    </List>
  );
}
