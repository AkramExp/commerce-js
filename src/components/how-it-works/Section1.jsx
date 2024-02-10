import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import MainHeading from "../../ui/MainHeading";
import MainSection from "../../ui/MainSection";
import VerticalRow from "../../ui/VerticalRow";
import ButtonGroup from "../../ui/ButtonGroup";

const Img = styled.img`
  position: relative;
  top: 2rem;
  width: 100%;

  @media screen and (max-width: 500px) {
  }
`;

export default function Section1() {
  const navigate = useNavigate();

  return (
    <MainSection>
      <VerticalRow>
        <MainHeading>
          Generate frontend experiences from our headless eCommerce backend
          <span>
            <span>Businesses:</span> Sell creatively.
          </span>{" "}
          <span>
            <span>Developers:</span> Integrate quickly.
          </span>
        </MainHeading>

        <ButtonGroup>
          <Button type="green" onClick={() => navigate("/signup")}>
            Start free
          </Button>
          {/* <Button type="dark">See Demo</Button> */}
        </ButtonGroup>
      </VerticalRow>
      <Img src="public\api_isometric_light.svg" />
    </MainSection>
  );
}
