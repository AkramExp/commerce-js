import styled from "styled-components";
import Section1 from "../components/integrations/Section1";
import Section2 from "../components/integrations/Section2";
import Section3 from "../components/integrations/Section3";
import Section4 from "../components/integrations/Section4";

const Main = styled.main`
  padding: 5rem 12rem 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    padding: 10rem 1rem 0;
    flex-wrap: wrap;
  }
`;

export default function Integrations() {
  return (
    <Main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Main>
  );
}
