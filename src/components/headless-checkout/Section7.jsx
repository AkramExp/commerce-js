import styled from "styled-components";
import BottomSection from "../../ui/BottomSection";
import MarginSection from "../../ui/MarginSection";

const Section = styled.div`
  background-color: var(--dark-blue-1);

  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export default function Section7() {
  return (
    <MarginSection>
      <Section>
        <BottomSection
          title="Boost conversions"
          text="Place checkout closer to your customers."
          buttons={[
            { text: "Get started for free", color: "green", to: "/signup" },
          ]}
        />
      </Section>
    </MarginSection>
  );
}
