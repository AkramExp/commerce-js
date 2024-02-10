import styled from "styled-components";
import MarginSection from "../../ui/MarginSection";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
import ButtonPill from "../../ui/ButtonPill";
import Para1 from "../../ui/Para1";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  padding: 4rem 12rem;
  background-color: var(--light-blue-5);

  @media screen and (max-width: 500px) {
    padding: 4rem 1rem;
  }
`;

const Img = styled.img`
  width: 100%;
`;

export default function Section4() {
  const navigate = useNavigate();

  return (
    <MarginSection>
      <Section>
        <TwoColumn>
          <VerticalRow>
            <Para1>
              A checkout that is headless can be deeply personalized, supports
              alternative payment methods, and can be placed virtually anywhere
              customers are.
            </Para1>
            <ButtonPill
              type="purple"
              onClick={() => navigate("/headless-checkout")}
            >
              Headless checkout
            </ButtonPill>
          </VerticalRow>
          <Img src="/headlesscheckoutsingle__1_.png" />
        </TwoColumn>
      </Section>
    </MarginSection>
  );
}
