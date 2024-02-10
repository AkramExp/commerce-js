import styled from "styled-components";
import Section1 from "../components/features/Section1";
import Section2 from "../components/features/Section2";
import Section3 from "../components/features/Section3";

const Main = styled.main`
  padding: 5rem 12rem 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    padding: 10rem 1rem 0;
    flex-wrap: wrap;
  }
`;

export default function Features() {
  return (
    <Main>
      <Section1 />
      <Section2 />
      <Section3 />
    </Main>
  );
}
