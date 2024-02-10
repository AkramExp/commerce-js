import styled from "styled-components";
import MarginSection from "../../ui/MarginSection";

const Section = styled.section`
  background-color: var(--dark-1);
  text-align: center;
  padding: 3rem 12rem;

  @media screen and (max-width: 500px) {
    padding: 3rem 1rem;
  }
`;

const SectionHeading = styled.h1`
  font-size: 1.8rem;
  line-height: 3rem;
  color: white;
`;

export default function Section2() {
  return (
    <MarginSection>
      <Section>
        <SectionHeading>
          The Jamstack puts site performance, frontend flexibility, and customer
          experience first for modern, high-growth eCommerce businesses.
        </SectionHeading>
      </Section>
    </MarginSection>
  );
}
