import VerticalSection from "../../ui/VerticalSection";
import SectionHeading from "../../ui/SectionHeading";
import ButtonPill from "../../ui/ButtonPill";
import TwoColumn from "../../ui/TwoColumn";
import SmallHeading1 from "../../ui/SmallHeading1";
import Para1 from "../../ui/Para1";
import VerticalRow from "../../ui/VerticalRow";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Img = styled.img`
  width: 100%;

  @media screen and (max-width: 500px) {
    grid-row: 1;
  }
`;

export default function Section3() {
  const navigate = useNavigate();

  return (
    <VerticalSection>
      <SectionHeading type="white">
        API-first eCommerce
        <span>Fully maintained. Secure. Ready to scale.</span>
      </SectionHeading>
      <TwoColumn>
        <VerticalRow>
          <SmallHeading1 type="blue">
            Headless. Approachable. Composable.
          </SmallHeading1>
          <Para1 type="white">
            Powerful APIs and SDKs for all developers. Integrate Commerce.js
            incrementally into your existing eCommerce platform, or create
            something new with a modern frontend framework.
          </Para1>
          <ButtonPill type="purple" onClick={() => navigate("/frameworks")}>
            javascript framework
          </ButtonPill>
        </VerticalRow>
        <Img src="public/API_test.png" />
      </TwoColumn>
    </VerticalSection>
  );
}
