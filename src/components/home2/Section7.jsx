import styled from "styled-components";
// import Button from "../../ui/Button";
import MarginSection from "../../ui/MarginSection";
import SectionHeading from "../../ui/SectionHeading";

const Section = styled.section`
  background-color: var(--dark-1);
  text-align: center;
  padding: 4rem 0;

  h1 {
    margin-top: 0;
  }
`;

export default function Section7() {
  return (
    <MarginSection>
      <Section>
        <SectionHeading type="white">
          Join the Commerce.js community
          <span>
            Collaborate with 1,000+ commerce developers from around the world.
          </span>
        </SectionHeading>
        {/* <Button type="white">Join Slack community</Button> */}
      </Section>
    </MarginSection>
  );
}
