import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import MainSection from "../../ui/MainSection";
import MainHeading from "../../ui/MainHeading";
import VerticalRow from "../../ui/VerticalRow";
import ButtonGroup from "../../ui/ButtonGroup";

const Img = styled.img`
  position: relative;
  width: 140%;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export default function Section1() {
  const navigate = useNavigate();

  return (
    <MainSection>
      <VerticalRow>
        <MainHeading>
          The world&apos;s most flexible headless checkout{" "}
          <span>
            Control your checkout experience and increase conversion rates with
            Commerce.js.
          </span>
        </MainHeading>
        <ButtonGroup>
          <Button type="green" onClick={() => navigate("/signup")}>
            Start for free
          </Button>
        </ButtonGroup>
      </VerticalRow>

      <Img src="/headless-checkout-main.png" />
    </MainSection>
  );
}
