import styled from "styled-components";
// import Button from "../../ui/Button";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
import SmallHeading2 from "../../ui/SmallHeading2";
import Para2 from "../../ui/Para2";

const Section = styled.section`
  padding: 6rem 0;
`;

export default function Section6() {
  return (
    <Section>
      <TwoColumn>
        <VerticalRow>
          <SmallHeading2 type="black">Agency partners</SmallHeading2>
          <Para2 type="black">
            Connect and collaborate with the best. For expert help with
            branding, strategy, design or development, our agency partners excel
            at elevating and amplifying your commerce presence.
          </Para2>
          {/* <Button type="purple">I need an agency</Button> */}
        </VerticalRow>
        <VerticalRow>
          <SmallHeading2 type="black">Technology partners</SmallHeading2>
          <Para2 type="black">
            Going beyond commerce, our technology partners help to orchestrate
            scalable, secure, and high impact solutions for your business. Speak
            to us about your project and we&apos;ll help you make the right
            technology decisions.
          </Para2>
          {/* <Button type="purple">Speak to an expert</Button> */}
        </VerticalRow>
      </TwoColumn>
    </Section>
  );
}
