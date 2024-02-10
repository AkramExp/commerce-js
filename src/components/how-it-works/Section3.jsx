import styled from "styled-components";
import Button from "../../ui/Button";
import SectionHeading from "../../ui/SectionHeading";
import MarginSection from "../../ui/MarginSection";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--light-blue-5);
  padding: 2rem 0 4rem;
`;

export default function Section3() {
  const navigate = useNavigate();

  return (
    <MarginSection>
      <Section>
        <SectionHeading>
          Need a solution built for your business?{" "}
          <span>
            We&apos;ll connect you with a developer or agency in our global
            network.
          </span>
        </SectionHeading>
        <Button type="purple" onClick={() => navigate("/contact")}>
          Contact us
        </Button>
      </Section>
    </MarginSection>
  );
}
