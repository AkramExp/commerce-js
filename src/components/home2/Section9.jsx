import styled from "styled-components";
import MarginSection from "../../ui/MarginSection";
import BottomSection from "../../ui/BottomSection";

const Section = styled.section`
  background-color: var(--dark-1);

  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export default function Section9() {
  return (
    <MarginSection>
      <Section>
        <BottomSection
          title="Ready to start building?"
          text="Go live faster with Commerce.js."
          buttons={[{ text: "Get started", color: "green", to: "/signup" }]}
        />
      </Section>
    </MarginSection>
  );
}
