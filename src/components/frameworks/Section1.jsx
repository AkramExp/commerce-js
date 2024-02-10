import styled from "styled-components";
import VerticalRow from "../../ui/VerticalRow";
import MainSection from "../../ui/MainSection";
import MainHeading from "../../ui/MainHeading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const Img = styled.img`
  position: relative;
  right: -3rem;
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
          JavaScript frameworks for eCommerce{" "}
          <span>
            Build eCommerce applications with our JavaScript SDK and commerce
            APIs. A modern toolkit for frontend JS developers.
          </span>
        </MainHeading>
        <ButtonGroup>
          <Button type="green" onClick={() => navigate("/signup")}>
            Get your API keys
          </Button>
          {/* <Button type="white">Documentation</Button> */}
        </ButtonGroup>
      </VerticalRow>
      <Img src="public/Javascriptfrontendsgalore.png" />
    </MainSection>
  );
}
