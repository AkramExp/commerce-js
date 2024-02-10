import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  list-style: none;
  text-decoration: none;
  padding: 0;
`;

const StyledNavLink = styled(NavLink)`
  ${(props) =>
    props.type === "light" &&
    css`
      background-color: white;
      color: black;
      box-shadow: 2px 2px 5px #cbcbcb;

      &:link.active {
        border-bottom: 2px solid black;
      }

      &:hover {
        background-color: #faf7ff;
      }
    `}

  ${(props) =>
    props.type === "dark" &&
    css`
      color: white;
      background-color: var(--blue-1);

      &:link.active {
        border-bottom: 2px solid white;
      }

      &:hover {
        background-color: var(--blue-2);
      }
    `}

  text-decoration: none;
  text-transform: uppercase;
  padding: 0.8rem 1rem;
  font-weight: 400;
`;

StyledNavLink.defaultProps = {
  type: "light",
};

export default function MainTab({ type }) {
  return (
    <NavList>
      <li>
        <StyledNavLink
          type={type}
          to="/"
          style={{
            borderTopLeftRadius: "2px",
            borderBottomLeftRadius: "2px",
            backgroundColor: type === "light" && "#faf7ff",
          }}
        >
          For businesses
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          type={type}
          to="/developers"
          style={{
            borderTopRightRadius: "2px",
            borderBottomRightRadius: "2px",
            backgroundColor: type === "dark" && "var(--blue-2)",
          }}
        >
          For developers
        </StyledNavLink>
      </li>
    </NavList>
  );
}
