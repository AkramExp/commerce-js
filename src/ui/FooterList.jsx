import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ListSection = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    padding: 0 0 2rem 0;
    gap: 2rem;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ListHeading = styled.h4`
  font-weight: 500;
  margin: 0 0 1rem 0;
`;

const ListItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  color: white;

  &:hover {
    color: #c6bcd7;
  }
`;

export default function FooterList() {
  return (
    <ListSection>
      <List>
        <ListHeading>Product</ListHeading>
        <ListItems>
          <li>
            <StyledNavLink to="/headless-checkout">
              Headless Checkout
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/dashboard">Admin Dashboard</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="commerce-api">Commerce APIs</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="features">Features</StyledNavLink>
          </li>
          {/* <li>
            <StyledNavLink to="/how-commercejs-works">
              How it works
            </StyledNavLink>
          </li> */}
        </ListItems>
      </List>
      <List>
        <ListHeading>Company</ListHeading>
        <ListItems>
          <li>
            <StyledNavLink to="">About</StyledNavLink>
          </li>
          {/* <li>
            <StyledNavLink>Blog</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Security</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Privacy/cookie policy</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Terms & Conditions</StyledNavLink>
          </li> */}
          <li>
            <StyledNavLink>Contact us</StyledNavLink>
          </li>
        </ListItems>
      </List>
      <List>
        <ListHeading>Resources</ListHeading>
        <ListItems>
          <li>
            <StyledNavLink to="/">For Businesses</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/developers">For Developers</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/integrations">Integrations</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/pricing">Pricing</StyledNavLink>
          </li>
          {/* <li>
            <StyledNavLink>Documentation</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Demo store</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Release notes</StyledNavLink>
          </li>
          <li>
            <StyledNavLink>Support</StyledNavLink>
          </li> */}
        </ListItems>
      </List>
      <List>
        <ListHeading>Concepts</ListHeading>
        <ListItems>
          <li>
            <StyledNavLink to="/headless-commerce">
              Headless Commerce
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="headless-checkout">
              Headless Checkout
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/jamstack">Jamstack Commerce</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/frameworks">
              JavaScript Frameworks
            </StyledNavLink>
          </li>
        </ListItems>
      </List>
    </ListSection>
  );
}
