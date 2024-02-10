import SectionHeading from "../../ui/SectionHeading";
import VerticalSection from "../../ui/VerticalSection";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
import styled from "styled-components";
import ButtonPill from "../../ui/ButtonPill";
import SmallHeading1 from "../../ui/SmallHeading1";
import Para1 from "../../ui/Para1";
import { useNavigate } from "react-router-dom";

const Img = styled.img`
  width: 100%;
`;

const Video = styled.video`
  width: 100%;
  border-radius: 7px;

  @media screen and (max-width: 500px) {
    &:first-child,
    &:last-child {
      grid-row: 1;
    }
  }
`;

export default function Section4() {
  const navigate = useNavigate();

  return (
    <VerticalSection>
      <SectionHeading type="white">
        Commerce.js ❤️&apos;s the Jamstack
        <span>
          Our Javascript SDK and eCommerce APIs make Jamstack developers
          powerful.
        </span>
      </SectionHeading>
      <TwoColumn>
        <Img src="/APIStackdark.svg" />
        <VerticalRow>
          <SmallHeading1 type="blue">Developer first eCommerce</SmallHeading1>
          <Para1 type="white">
            Use our headless eCommerce backend for storing product data,
            creating carts and checkouts, and managing customers and orders.
          </Para1>
          {/* <ButtonPill type="purple">View docs</ButtonPill> */}
        </VerticalRow>
      </TwoColumn>
      <TwoColumn>
        <VerticalRow>
          <SmallHeading1 type="blue">Control over your eCommerce</SmallHeading1>
          <Para1 type="white">
            Total control over the storefront, cart, and checkout experience.
          </Para1>
          {/* <ButtonPill type="purple">Demo site</ButtonPill> */}
        </VerticalRow>
        <Video src="/chochopcartexp.mp4" />
      </TwoColumn>
      <TwoColumn>
        <Img src="/Cityscape_good.svg" />
        <VerticalRow>
          <SmallHeading1 type="blue">
            Build with the tools you love
          </SmallHeading1>
          <Para1 type="white">
            Commerce.js works with your Jamstack architecture. Develop with any
            frontend framework, content management system, payment gateway, and
            hosting provider.
          </Para1>
          <ButtonPill type="purple" onClick={() => navigate("/integrations")}>
            Explore integrations
          </ButtonPill>
        </VerticalRow>
      </TwoColumn>
      <TwoColumn>
        <VerticalRow>
          <SmallHeading1 type="blue">Open source starter kit</SmallHeading1>
          <Para1 type="white">
            Jumpstart your Jamstack project with our open source demo store.
          </Para1>
          {/* <ButtonPill type="purple">View on github</ButtonPill> */}
        </VerticalRow>
        <Video src="/homecommercecartexp.mp4" />
      </TwoColumn>
    </VerticalSection>
  );
}
