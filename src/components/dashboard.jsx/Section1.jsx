import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import MainSection from "../../ui/MainSection";
import MainHeading from "../../ui/MainHeading";
import ButtonGroup from "../../ui/ButtonGroup";
import VerticalRow from "../../ui/VerticalRow";

const Img = styled.img`
  position: relative;
  width: 100%;
  right: -2rem;

  @media screen and (max-width: 500px) {
    right: 0;
  }
`;

export default function Section1() {
  const navigate = useNavigate();

  return (
    <MainSection>
      <VerticalRow>
        <MainHeading>
          Manage everything from our modern dashboard{" "}
          <span>
            Your control hub for products, customers, orders, and integrations.
            Fast, intuitive, and contextual for the whole team.
          </span>
        </MainHeading>

        <ButtonGroup>
          <Button type="green" onClick={() => navigate("/signup")}>
            Start free
          </Button>
          <Button type="purple" onClick={() => navigate("/contact")}>
            Speak to an expert
          </Button>
        </ButtonGroup>
      </VerticalRow>
      <Img src="/Dashboard_Hero_Orders__1_.png" />
    </MainSection>
  );
}
