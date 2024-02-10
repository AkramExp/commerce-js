import styled, { css } from "styled-components";

const SmallHeading1 = styled.h5`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 500;

  color: var(--dark-1);

  ${(props) =>
    props.type === "blue" &&
    css`
      color: #7187a5;
    `}

  ${(props) =>
    props.type === "white" &&
    css`
      color: white;
    `}
`;

export default SmallHeading1;
