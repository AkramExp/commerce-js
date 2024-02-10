import styled, { css } from "styled-components";

const Para1 = styled.p`
  font-size: 1.6rem;
  margin: 0;
  font-weight: 400;
  line-height: 2.5rem;
  color: var(--dark-1);

  ${(props) =>
    props.type === "white" &&
    css`
      color: white;
    `}

  a {
    color: var(--dark-blue-2);
    text-decoration: underline;
    font-weight: 500;
  }
`;

export default Para1;
