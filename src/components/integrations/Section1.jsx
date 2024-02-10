import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import MainHeading from "../../ui/MainHeading";
import MainSection from "../../ui/MainSection";
import VerticalRow from "../../ui/VerticalRow";

const Img = styled.img`
  position: relative;
  width: 95%;
  right: -3rem;

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
          Commerce.js integrations{" "}
          <span>
            Compose your commerce stack with one-click integrations and starters
            for best-in-class providers, platforms, and APIs.
          </span>
        </MainHeading>

        <div>
          <Button type="green" onClick={() => navigate("/signup")}>
            Start for free
          </Button>
        </div>
      </VerticalRow>
      <Img src="public\Integrationsforbusinesses__1_.png" />
    </MainSection>
  );
}
