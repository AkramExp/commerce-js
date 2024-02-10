import SectionHeading from "../../ui/SectionHeading";
import VerticalSection from "../../ui/VerticalSection";
import CardSection1 from "../card-section1/CardSection1";

export default function Section2() {
  return (
    <VerticalSection>
      <SectionHeading type="white">
        Build with your framework of choice
        <span>Commerce for frontend developers.</span>
      </SectionHeading>
      <CardSection1 />
    </VerticalSection>
  );
}
