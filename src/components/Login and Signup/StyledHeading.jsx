import styled from "styled-components";

const StyledHeading = styled.h1`
  color: var(--blue-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 2rem;

  & span {
    font-weight: 400;
    font-size: 20px;
    margin: 1rem;
  }
`;

export default StyledHeading;
