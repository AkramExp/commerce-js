import styled, { css } from "styled-components";

const SmallHeading2 = styled.h5`
  font-size: 2rem;
  margin: 0;
  font-weight: 500;
  color: white;

  ${(props) =>
    props.type === "black" &&
    css`
      color: var(--dark-1);
    `}
`;

export default SmallHeading2;
