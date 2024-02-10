import styled from "styled-components";
import MainTab from "../../ui/MainTab";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import MainHeading from "../../ui/MainHeading";
import MainSection from "../../ui/MainSection";
import VerticalRow from "../../ui/VerticalRow";
import ButtonGroup from "../../ui/ButtonGroup";

const Img = styled.img`
  position: relative;
  right: -6rem;
  width: 130%;

  @media screen and (max-width: 760px) {
    right: 0;
    width: 90%;
  }
`;

export default function Section1() {
  const navigate = useNavigate();

  return (
    <MainSection>
      <VerticalRow>
        <MainTab type="light" />

        <MainHeading>
          Take ownership over your commerce{" "}
          <span>
            <span>Commerce.js</span> is a flexible commerce engine that gives
            businesses the freedom to innovate and grow.
          </span>
        </MainHeading>

        <ButtonGroup>
          <Button type="green" onClick={() => navigate("/signup")}>
            Start for free
          </Button>
          <Button type="purple" onClick={() => navigate("/contact")}>
            Speak to an expert
          </Button>
        </ButtonGroup>
      </VerticalRow>
      <Img src="public\main-section-image.png" />
    </MainSection>
  );
}
