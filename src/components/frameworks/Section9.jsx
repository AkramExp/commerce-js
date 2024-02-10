import styled from "styled-components";
import MarginSection from "../../ui/MarginSection";
import BottomSection from "../../ui/BottomSection";

const Section = styled.div`
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
          title="Engineer your commerce for any frontend"
          text="Leverage our commerce APIs built for the modern web."
          buttons={[{ text: "Start free", color: "green", to: "/signup" }]}
        />
      </Section>
    </MarginSection>
  );
}
