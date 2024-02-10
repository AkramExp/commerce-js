import styled from "styled-components";
import MainSection from "../../ui/MainSection";
import VerticalRow from "../../ui/VerticalRow";
import MainHeading from "../../ui/MainHeading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const Img = styled.img`
  position: relative;
  right: -4rem;
  width: 100%;

  @media screen and (max-width: 500px) {
    right: 0;
  }
`;

export default function Section1() {
  const navigate = useNavigate();

  return (
    <MainSection>
      <VerticalRow>
        <MainHeading type="white">
          Build world class eCommerce experiences with API level control.
        </MainHeading>
        <ButtonGroup>
          <Button type="green" onClick={() => navigate("/signup")}>
            Start building for free
          </Button>
          {/* <Button type="white">API reference</Button> */}
        </ButtonGroup>
      </VerticalRow>
      <Img src="public/API_final.svg" />
    </MainSection>
  );
}
