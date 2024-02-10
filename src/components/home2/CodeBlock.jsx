import { useState } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import Code from "./Code";

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const StyledDiv = styled.div`
  width: 80%;
  height: 60%;
  border-radius: 5px;
  border: 0.5px solid white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 1.5rem;
  background: linear-gradient(
        90deg,
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 1%
      )
      center / var(--dot-space) var(--dot-space),
    linear-gradient(
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 1%
      )
      center / var(--dot-space) var(--dot-space),
    var(--dot-color);
`;

const FilterButtonGroup = styled.div`
  padding: 6px;
  display: flex;
  gap: 0.5rem;
  background-color: var(--dark-3);
  border-radius: 40px;
  margin-bottom: 1rem;
`;

export default function CodeBlock() {
  const [active, setActive] = useState(1);

  function handleClick(value) {
    setActive(value);
  }

  return (
    <Div>
      <StyledDiv>
        <FilterButtonGroup>
          <FilterButton active={active === 1} onClick={() => handleClick(1)}>
            List Products
          </FilterButton>
          <FilterButton active={active === 2} onClick={() => handleClick(2)}>
            Add to cart
          </FilterButton>
          <FilterButton active={active === 3} onClick={() => handleClick(3)}>
            Checkout
          </FilterButton>
        </FilterButtonGroup>
        <Code active={active} />
      </StyledDiv>
    </Div>
  );
}
