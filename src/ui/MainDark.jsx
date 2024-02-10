import styled from "styled-components";

const MainDark = styled.main`
  padding: 5rem 12rem 0;
  background-color: var(--dark-3);
  display: flex;
  flex-direction: column;
  gap: 8rem;

  @media screen and (max-width: 760px) {
    padding: 10rem 1rem 0;
    flex-wrap: wrap;
  }
`;

export default MainDark;
