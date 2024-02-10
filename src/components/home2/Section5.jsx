import styled from "styled-components";
// import Button from "../../ui/Button";
import MarginSection from "../../ui/MarginSection";
import SectionHeading from "../../ui/SectionHeading";

const Section = styled.section`
  background-color: var(--dark-1);
  text-align: center;
  padding: 5rem 0;

  h1 {
    margin-top: 0;
  }
`;

export default function Section5() {
  return (
    <MarginSection>
      <Section>
        <SectionHeading type="white">
          Ever-evolving eCommerce
          <span>See what&apos;s new on our blog.</span>
        </SectionHeading>
        {/* <Button type="white">Explore</Button> */}
      </Section>
    </MarginSection>
  );
}
