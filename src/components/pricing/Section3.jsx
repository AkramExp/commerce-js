import styled from "styled-components";
import ButtonPill from "../../ui/ButtonPill";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
import SmallHeading1 from "../../ui/SmallHeading1";
import Para1 from "../../ui/Para1";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  padding: 4rem 0;
`;

const Img = styled.img`
  width: 100%;
`;

export default function Section3() {
  const navigate = useNavigate();

  return (
    <Section>
      <TwoColumn>
        <VerticalRow>
          <SmallHeading1>Headless checkout</SmallHeading1>
          <Para1>
            Our headless checkout is designed handle products from a variety of
            different sources and integrate with any best-in-class service.
            <br />
            <br />
            Gain an unfair advantage with a headless checkout.
          </Para1>
          <ButtonPill type="red" onClick={() => navigate("/headless-checkout")}>
            Learn more
          </ButtonPill>
        </VerticalRow>
        <Img src="public/abtestcechhiout__1_.png" />
      </TwoColumn>
    </Section>
  );
}
