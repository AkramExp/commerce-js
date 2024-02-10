import styled from "styled-components";

const TwoColumn = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;

  &:nth-child(even) img {
    order: 1;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;

    &:nth-child(even) img {
      order: 0;
    }
  }
`;

export default TwoColumn;
