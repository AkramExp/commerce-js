import styled from "styled-components";
import MarginSection from "../../ui/MarginSection";

const Section = styled.section`
  background-color: var(--dark-1);
  text-align: center;
  padding: 3rem 0;

  @media screen and (max-width: 760px) {
    padding: 3rem 1rem;
  }
`;

const SectionHeading = styled.h1`
  font-size: 1.8rem;
  color: white;
`;

export default function Section3() {
  return (
    <MarginSection>
      <Section>
        <SectionHeading>
          Managed backend, logic, and integrations for all your commerce needs.
        </SectionHeading>
      </Section>
    </MarginSection>
  );
}
