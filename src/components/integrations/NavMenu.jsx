import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  padding: 0;
  height: 20rem;
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
  const [activeLink, setActiveLink] = useState("content");

  function handleClick(value) {
    setActiveLink(value);
    console.log(activeLink);
  }

  return (
    <List>
      <ListItem
        href="#content"
        onClick={() => handleClick("content")}
        style={{ fontWeight: activeLink === "content" && "500" }}
      >
        Content
      </ListItem>
      <ListItem
        href="#payments"
        onClick={() => handleClick("payments")}
        style={{ fontWeight: activeLink === "payments" && "500" }}
      >
        Payments
      </ListItem>
      <ListItem
        href="#search"
        onClick={() => handleClick("search")}
        style={{ fontWeight: activeLink === "search" && "500" }}
      >
        Search
      </ListItem>
      <ListItem
        href="#communication"
        onClick={() => handleClick("communication")}
        style={{ fontWeight: activeLink === "communication" && "500" }}
      >
        Communication
      </ListItem>
      <ListItem
        href="#shipping"
        onClick={() => handleClick("shipping")}
        style={{ fontWeight: activeLink === "shipping" && "500" }}
      >
        {" "}
        Shipping
      </ListItem>
      <ListItem
        href="#tax"
        onClick={() => handleClick("tax")}
        style={{ fontWeight: activeLink === "tax" && "500" }}
      >
        Tax
      </ListItem>
      <ListItem
        href="#automation"
        onClick={() => handleClick("automation")}
        style={{ fontWeight: activeLink === "automation" && "500" }}
      >
        Automation
      </ListItem>
      <ListItem
        href="#commercePlatform"
        onClick={() => handleClick("commercePlatform")}
        style={{ fontWeight: activeLink === "commercePlatform" && "500" }}
      >
        Commerce Platform
      </ListItem>
    </List>
  );
}
