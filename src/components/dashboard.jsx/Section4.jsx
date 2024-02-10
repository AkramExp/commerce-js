import styled from "styled-components";
import BottomSection from "../../ui/BottomSection";
import MarginSection from "../../ui/MarginSection";

const Section = styled.section`
  background-color: var(--dark-3);

  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export default function Section4() {
  return (
    <MarginSection>
      <Section>
        <BottomSection
          title="Optimize your commerce"
          text="Create the best customer experiences with Commerce.js."
          buttons={[{ text: "Start free", color: "green", to: "/signup" }]}
        />
      </Section>
    </MarginSection>
  );
}
