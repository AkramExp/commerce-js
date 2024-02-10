import styled from "styled-components";
import NavMenu from "./NavMenu";
import ContentSection from "./ContentSection";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export default function Section2() {
  return (
    <Section>
      <NavMenu />
      <ContentSection />
    </Section>
  );
}
