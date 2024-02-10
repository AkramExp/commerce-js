import styled, { css } from "styled-components";

const SectionHeading = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 2.3rem;
  font-weight: 500;

  ${(props) =>
    props.type === "white" &&
    css`
      color: white;
    `}

  & span {
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 1rem;
    color: var(--dark-1);

    ${(props) =>
      props.type === "white" &&
      css`
        color: white;
      `}
  }

  @media screen and (max-width: 760px) {
    text-align: center;
  }
`;

export default SectionHeading;
