import styled, { css } from "styled-components";

const Para2 = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2.25rem;
  color: white;
  margin: 0;

  ${(props) =>
    props.type === "black" &&
    css`
      color: var(--dark-1);
    `}

  span {
    background-color: var(--dark-5);
    border: 1px solid var(--dark-4);
    padding: 5px;
    border-radius: 5px;
  }
`;

export default Para2;
