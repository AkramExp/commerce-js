import styled from "styled-components";
import Section1 from "../components/how-it-works/Section1";
import Section2 from "../components/how-it-works/Section2";
import Section3 from "../components/how-it-works/Section3";
import Section4 from "../components/how-it-works/Section4";
import Section5 from "../components/how-it-works/Section5";
import Section6 from "../components/how-it-works/Section6";
import Section7 from "../components/how-it-works/Section7";

const Main = styled.main`
  padding: 5rem 12rem 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    padding: 10rem 1rem 0;
    flex-wrap: wrap;
  }
`;

export default function HowItWorks() {
  return (
    <Main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </Main>
  );
}
