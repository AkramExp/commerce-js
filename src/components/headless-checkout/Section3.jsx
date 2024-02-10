import styled from "styled-components";
import MarginSection from "../../ui/MarginSection";
import SectionHeading from "../../ui/SectionHeading";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--light-blue-5);
  padding: 3rem 12rem;

  @media screen and (max-width: 500px) {
    padding: 3rem 1rem;
  }
`;

const P = styled.p`
  font-size: 1.5rem;
  color: var(--dark-1);
  line-height: 2rem;
`;

export default function Section3() {
  return (
    <MarginSection>
      <Section>
        <SectionHeading>What makes a checkout headless?</SectionHeading>
        <P>
          A decoupled order and payment form that can be configured to look and
          behave exactly how you need it, enabling deep personalization where it
          matters the most.
          <br />
          <br />
          Unlike your traditional static checkout, a headless checkout can have
          multiple variations, be implemented into any customer facing
          experience, and leverage best-in-class services.
        </P>
      </Section>
    </MarginSection>
  );
}
