import styled, { css } from "styled-components";

const MainHeading = styled.h1`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--dark-1);
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 4rem;

  ${(props) =>
    props.type === "white" &&
    css`
      color: white;
    `}

  span {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.5rem;

    span {
      font-weight: 500;
    }
  }

  @media screen and (max-width: 760px) {
    flex-wrap: wrap;
  }
`;

export default MainHeading;
