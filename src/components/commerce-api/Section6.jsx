import styled from "styled-components";
import ButtonPill from "../../ui/ButtonPill";
import Para1 from "../../ui/Para1";
import SmallHeading1 from "../../ui/SmallHeading1";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
import VerticalSection from "../../ui/VerticalSection";
import { useNavigate } from "react-router-dom";

const Img = styled.img`
  width: 100%;
`;

export default function Section6() {
  const navigate = useNavigate();

  return (
    <VerticalSection>
      <TwoColumn>
        <Img src="/Cityscape_good.svg" />
        <VerticalRow>
          <SmallHeading1 type="blue">Integrate with any service</SmallHeading1>
          <Para1 type="white">
            Use our out-of-the-box integrations or build your own open, flexible
            integrations.
          </Para1>
          <ButtonPill type="purple" onClick={() => navigate("/integrations")}>
            Integrations
          </ButtonPill>
        </VerticalRow>
      </TwoColumn>
    </VerticalSection>
  );
}
