import styled from "styled-components";

const MainSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 90vh;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    height: auto;
    flex-wrap: wrap;
  }
`;
export default MainSection;
