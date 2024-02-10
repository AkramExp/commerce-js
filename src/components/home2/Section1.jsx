import MainTab from "../../ui/MainTab";
import Button from "../../ui/Button";
import CodeBlock from "./CodeBlock";
import MainHeading from "../../ui/MainHeading";
import MainSection from "../../ui/MainSection";
import VerticalRow from "../../ui/VerticalRow";
import ButtonGroup from "../../ui/ButtonGroup";
import { useNavigate } from "react-router-dom";

export default function Section1() {
  const navigate = useNavigate();

  return (
    <MainSection>
      <VerticalRow>
        <MainTab type="dark" />
        <MainHeading type="white">
          Product, cart, and checkout tooling for developers
          <span>
            API-first, headless commerce backend for ultimate eCommerce control.
          </span>
        </MainHeading>
        <ButtonGroup>
          <Button type="green" onClick={() => navigate("/signup")}>
            Get your API keys
          </Button>
          {/* <Button type="white">Documentation</Button> */}
        </ButtonGroup>
      </VerticalRow>
      <CodeBlock />
    </MainSection>
  );
}
