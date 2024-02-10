import styled from "styled-components";
import MarginSection from "../../ui/MarginSection";
import SectionHeading from "../../ui/SectionHeading";
import Button from "../../ui/Button";
import VerticalSection from "../../ui/VerticalSection";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  background-color: var(--dark-1);
  padding: 2rem 0 4rem;
`;

export default function Section3() {
  const navigate = useNavigate();

  return (
    <MarginSection>
      <Section>
        <VerticalSection>
          <SectionHeading type="white">
            Develop commerce apps with our headless backend
          </SectionHeading>
          <Button type="green" onClick={() => navigate("/signup")}>
            Get your API keys
          </Button>
        </VerticalSection>
      </Section>
    </MarginSection>
  );
}
