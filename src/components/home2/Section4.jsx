import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import ButtonPill from "../../ui/ButtonPill";
import VerticalSection from "../../ui/VerticalSection";
import TwoColumn from "../../ui/TwoColumn";
import SmallHeading1 from "../../ui/SmallHeading1";
import Para1 from "../../ui/Para1";
import ButtonGroup from "../../ui/ButtonGroup";
import VerticalRow from "../../ui/VerticalRow";
import { useNavigate } from "react-router-dom";

const Img = styled.img`
  width: 100%;
  @media screen and (max-width: 760px) {
    &:nth-child(1n) {
      grid-row: 1;
    }
  }
`;

const Video = styled.video`
  width: 100%;
`;

export default function Section4() {
  const navigate = useNavigate();

  return (
    <VerticalSection>
      <SectionHeading type="white">
        Built for modern commerce development
        <span>Deliver high performance commerce applications at scale.</span>
      </SectionHeading>
      <TwoColumn>
        <Img src="public\APIdevsupdate-__1_.png" />
        <VerticalRow>
          <SmallHeading1 type="blue">Model</SmallHeading1>
          <Para1 type="white">
            Create custom product, cart, and checkout models with our
            lightweight, flexible, and fully managed commerce APIs.
          </Para1>
          <ButtonPill type="purple" onClick={() => navigate("/commerce-api")}>
            Commerce Apis
          </ButtonPill>
        </VerticalRow>
      </TwoColumn>

      <TwoColumn>
        <Video
          src="public\homecommercecartexp.mp4"
          style={{ borderRadius: "10px" }}
        />
        <VerticalRow>
          <SmallHeading1 type="blue">Create</SmallHeading1>
          <Para1 type="white">
            Build fast, high converting commerce applications that look and
            behave as you need them to.
          </Para1>
          <ButtonGroup>
            {/* <ButtonPill type="transparent">Demo store 1</ButtonPill>
            <ButtonPill type="transparent">Demo store 2</ButtonPill> */}
          </ButtonGroup>
        </VerticalRow>
      </TwoColumn>

      <TwoColumn>
        <Img src="public\integrations-dark.svg" />
        <VerticalRow>
          <SmallHeading1 type="blue">Integrate</SmallHeading1>
          <Para1 type="white">
            Connect with any backend service or frontend framework and device.
            Leverage our out-of-the-box integrations and powerful webhooks.
          </Para1>
          <ButtonPill type="purple" onClick={() => navigate("/integrations")}>
            Integrations
          </ButtonPill>
        </VerticalRow>
      </TwoColumn>
    </VerticalSection>
  );
}
