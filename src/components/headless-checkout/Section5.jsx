import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import ButtonPill from "../../ui/ButtonPill";
import VerticalSection from "../../ui/VerticalSection";
import VerticalRow from "../../ui/VerticalRow";
import TwoColumn from "../../ui/TwoColumn";
import ButtonGroup from "../../ui/ButtonGroup";
import SmallHeading1 from "../../ui/SmallHeading1";
import Para1 from "../../ui/Para1";
import { useNavigate } from "react-router-dom";

const Img = styled.img`
  width: 100%;

  @media screen and (max-width: 500px) {
    &:nth-child(1n) {
      grid-row: 1;
    }
  }
`;

const Video = styled.video`
  width: 100%;
  border-radius: 5px;
  box-shadow: var(--shadow);
`;

export default function Section5() {
  const navigate = useNavigate();

  return (
    <VerticalSection>
      <SectionHeading>Why Commerce.js?</SectionHeading>
      <TwoColumn>
        <Img src="/reidcheckout.png" />
        <VerticalRow>
          <SmallHeading1>Experience control</SmallHeading1>
          <Para1>
            Single page, multi-step, background colors, animations, CTA buttons,
            cart summary. Every single aspect of your conversion experience can
            be controlled.
          </Para1>
        </VerticalRow>
      </TwoColumn>
      <TwoColumn>
        <Video
          src="/Fast_loading_checkout.mov"
          style={{ borderRadius: "10px" }}
        />
        <VerticalRow>
          <SmallHeading1>Processing power</SmallHeading1>
          <Para1>
            Commerce.js has an API-first approach to commerce, making your
            experiences fast to load, easy to update, and seamless when
            converting customers.
          </Para1>
          <ButtonGroup>
            {/* <ButtonPill type="purple">Checkout api</ButtonPill> */}
          </ButtonGroup>
        </VerticalRow>
      </TwoColumn>
      <TwoColumn>
        <Img src="/Cityscape_light.svg" />
        <VerticalRow>
          <SmallHeading1>Integration freedom</SmallHeading1>
          <Para1>
            Checkout integrations for shipping, tax, address verification,
            identity, payments and more. Make your payment and order forms work
            for you.
          </Para1>
          <ButtonPill type="purple" onClick={() => navigate("/integrations")}>
            Integrations
          </ButtonPill>
        </VerticalRow>
      </TwoColumn>
    </VerticalSection>
  );
}
