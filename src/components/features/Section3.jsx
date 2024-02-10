import styled from "styled-components";
import Button from "../../ui/Button";
import MarginSection from "../../ui/MarginSection";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
import SmallHeading1 from "../../ui/SmallHeading1";
import Para1 from "../../ui/Para1";
import ButtonGroup from "../../ui/ButtonGroup";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  background-color: var(--light-blue-5);
  margin-top: 4rem;
  padding: 5rem 12rem;

  @media screen and (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;

const Img = styled.img`
  width: 100%;
`;

export default function Section3() {
  const navigate = useNavigate();

  return (
    <MarginSection>
      <Section>
        <TwoColumn>
          <VerticalRow>
            <SmallHeading1>The flexiblity to innovate</SmallHeading1>
            <Para1>
              Build your commerce without the limitations of a traditional
              platform. Choose what APIs and functionality you need and start
              selling.
            </Para1>
            <ButtonGroup>
              <Button type="green" onClick={() => navigate("/signup")}>
                Get started for free
              </Button>
              <Button type="purple" onClick={() => navigate("/contact")}>
                Contact Sales
              </Button>
            </ButtonGroup>
          </VerticalRow>
          <Img src="public/Merchants_contextual.svg" />
        </TwoColumn>
      </Section>
    </MarginSection>
  );
}
