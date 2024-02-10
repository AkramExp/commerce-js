import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  padding: 0;
  height: 25rem;
  position: sticky;
  top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const ListItem = styled.a`
  text-decoration: none;
  color: var(--dark-1);
  font-size: 1.4rem;
  font-weight: 400;
  cursor: pointer;
`;

export default function NavMenu() {
  const [activeLink, setActiveLink] = useState("checkout");

  function handleClick(value) {
    setActiveLink(value);
    console.log(activeLink);
  }

  return (
    <List>
      <ListItem
        href="#checkout"
        onClick={() => handleClick("checkout")}
        style={{ fontWeight: activeLink === "checkout" && "600" }}
      >
        Checkout
      </ListItem>
      <ListItem
        href="#products"
        onClick={() => handleClick("products")}
        style={{ fontWeight: activeLink === "products" && "600" }}
      >
        Products
      </ListItem>
      <ListItem
        href="#orders"
        onClick={() => handleClick("orders")}
        style={{ fontWeight: activeLink === "orders" && "600" }}
      >
        Orders
      </ListItem>
      <ListItem
        href="#fulfillment"
        onClick={() => handleClick("fulfillment")}
        style={{ fontWeight: activeLink === "fulfillment" && "600" }}
      >
        Fullfillment
      </ListItem>
      <ListItem
        href="#reporting"
        onClick={() => handleClick("reporting")}
        style={{ fontWeight: activeLink === "reporting" && "600" }}
      >
        Reporting
      </ListItem>
      <ListItem
        href="#storefront"
        onClick={() => handleClick("storefront")}
        style={{ fontWeight: activeLink === "storefront" && "600" }}
      >
        Storefront
      </ListItem>
      <ListItem
        href="#developers"
        onClick={() => handleClick("developers")}
        style={{ fontWeight: activeLink === "developers" && "600" }}
      >
        Developers
      </ListItem>
    </List>
  );
}
