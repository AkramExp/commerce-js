import styled from "styled-components";
import MarginSection from "../../ui/MarginSection";
import BottomSection from "../../ui/BottomSection";

const Section = styled.section`
  background-color: var(--dark-3);
  padding: 2rem;

  @media screen and (max-width: 500px) {
    padding: 0 1rem;
    margin-top: 4rem;
  }
`;

export default function Section4() {
  return (
    <MarginSection>
      <Section>
        <BottomSection
          title="Flexible. Composable. Headless."
          buttons={[
            { text: "Get started for free", color: "green", to: "/signup" },
          ]}
        />
      </Section>
    </MarginSection>
  );
}
