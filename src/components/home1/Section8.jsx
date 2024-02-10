import styled from "styled-components";
import MarginSection from "../../ui/MarginSection";
import BottomSection from "../../ui/BottomSection";

const Section = styled.section`
  background-color: var(--dark-blue-1);

  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export default function Section8() {
  return (
    <MarginSection>
      <Section>
        <BottomSection
          title="It's easy to get started"
          text="Get started for free, or contact sales to discuss your requirements."
          buttons={[
            { text: "Start free", color: "green", to: "/signup" },
            { text: "Contact sales", color: "purple", to: "/contact" },
          ]}
        />
      </Section>
    </MarginSection>
  );
}
