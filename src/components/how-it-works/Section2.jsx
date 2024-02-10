import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
// import ButtonPill from "../../ui/ButtonPill";
// import ButtonGroup from "../../ui/ButtonGroup";
import TwoColumn from "../../ui/TwoColumn";
import SmallHeading1 from "../../ui/SmallHeading1";
import Para1 from "../../ui/Para1";
import VerticalRow from "../../ui/VerticalRow";

const Section = styled.section`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  position: relative;
  right: 0rem;
  width: 100%;
`;

export default function Section2() {
  const navigate = useNavigate();

  return (
    <Section>
      <TwoColumn>
        <Img src="/Product_list___Dashboard_2x.png" />
        <VerticalRow>
          <SmallHeading1>1. Setup your account</SmallHeading1>
          <Para1>Create a free account and start adding products.</Para1>
          <Button type="green" onClick={() => navigate("/signup")}>
            Start your free account
          </Button>
        </VerticalRow>
      </TwoColumn>
      <TwoColumn>
        <Img src="/Sellmore.svg" />
        <VerticalRow>
          <SmallHeading1>2. Start selling</SmallHeading1>
          <Para1>
            Sell physical and digital products in 135+ currencies with our
            hosted storefronts, pages, and checkouts. Customize with your{" "}
            developer.
          </Para1>
          {/* <ButtonGroup>
            <ButtonPill type="dark">SEE HOSTED STOREFRONT</ButtonPill>
            <ButtonPill type="dark">SEE CUSTOMIZED STOREFRONT</ButtonPill>
          </ButtonGroup> */}
        </VerticalRow>
      </TwoColumn>
    </Section>
  );
}
