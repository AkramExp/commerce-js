import styled from "styled-components";
import Section1 from "../components/pricing/Section1";
import Section2 from "../components/pricing/Section2";
import Section3 from "../components/pricing/Section3";
import Section4 from "../components/pricing/Section4";
import Section5 from "../components/pricing/Section5";
import Section6 from "../components/pricing/Section6";
import Section7 from "../components/pricing/Section7";

const Main = styled.main`
  padding: 5rem 12rem 0;

  @media screen and (max-width: 500px) {
    padding: 5rem 1rem 0;
  }
`;

export default function Pricing() {
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
