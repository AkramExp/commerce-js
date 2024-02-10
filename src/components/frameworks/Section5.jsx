import SectionHeading from "../../ui/SectionHeading";
import ButtonPill from "../../ui/ButtonPill";
import VerticalSection from "../../ui/VerticalSection";
import CardSection2 from "../card-section2/CardSection2";
import { useNavigate } from "react-router-dom";

export default function Section5() {
  const navigate = useNavigate();

  return (
    <VerticalSection>
      <SectionHeading type="white">APIs for Commerce</SectionHeading>
      <ButtonPill type="purple" onClick={() => navigate("/commerce-api")}>
        view all apis
      </ButtonPill>
      <CardSection2 />
    </VerticalSection>
  );
}
