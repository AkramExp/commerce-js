import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SectionHeading from "../../ui/SectionHeading";
import ButtonPill from "../../ui/ButtonPill";
import VerticalSection from "../../ui/VerticalSection";
import TwoColumn from "../../ui/TwoColumn";
import SmallHeading1 from "../../ui/SmallHeading1";
import Para1 from "../../ui/Para1";
import VerticalRow from "../../ui/VerticalRow";

const Img = styled.img`
  width: 100%;

  @media screen and (max-width: 760px) {
    &:nth-child(1n) {
      grid-row: 1;
    }
  }
`;

export default function Section4() {
  const navigate = useNavigate();

  return (
    <VerticalSection>
      <SectionHeading>
        Flexibility to innovate
        <span>Delight customers and drive revenue, on your own terms.</span>
      </SectionHeading>
      <TwoColumn>
        <Img src="public\own-your-checkout.png" />
        <VerticalRow>
          <SmallHeading1>Own your checkout</SmallHeading1>
          <Para1>
            Test, iterate, and optimize every aspect of your eCommerce,
            including your checkout. Convert customers and drive revenue with
            personalized experiences.
          </Para1>
          <ButtonPill
            type="purple"
            onClick={() => navigate("/headless-checkout")}
          >
            Headless checkout
          </ButtonPill>
        </VerticalRow>
      </TwoColumn>
      <TwoColumn>
        <Img src="public\composable-commerce.png" />
        <VerticalRow>
          <SmallHeading1>Composable commerce integrations</SmallHeading1>
          <Para1>
            Create your desired purchasing experiences and internal processes by
            connecting with best-in-class services.
          </Para1>
          <ButtonPill type="purple" onClick={() => navigate("/integrations")}>
            Explore integrations
          </ButtonPill>
        </VerticalRow>
      </TwoColumn>
    </VerticalSection>
  );
}
