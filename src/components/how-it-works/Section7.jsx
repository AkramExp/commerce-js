import styled from "styled-components";
import MarginSection from "../../ui/MarginSection";
import BottomSection from "../../ui/BottomSection";

const Section = styled.section`
  background-color: var(--dark-1);

  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export default function Section7() {
  return (
    <MarginSection>
      <Section>
        <BottomSection
          title="A better way to build and scale your commerce"
          text="Put your commerce anywhere."
          buttons={[{ text: "Get started", color: "green", to: "/signup" }]}
        />
      </Section>
    </MarginSection>
  );
}
