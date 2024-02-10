// import ButtonPill from "../../ui/ButtonPill";
import SectionHeading from "../../ui/SectionHeading";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
import VerticalSection from "../../ui/VerticalSection";
import SmallHeading2 from "../../ui/SmallHeading2";
import Para2 from "../../ui/Para2";
import CodeBlock from "./CodeBlock";

export default function Section7() {
  return (
    <VerticalSection>
      <SectionHeading type="white">
        It&apos;s easy to get started
      </SectionHeading>
      <TwoColumn>
        <VerticalRow>
          <SmallHeading2>1. Install and authenticate</SmallHeading2>
          <Para2>
            Simply <span>npm install</span> or{" "}
            <span>yarn add @chec/commerce.js</span>. Then create a new Commerce
            instance and add your public API key.
          </Para2>
          {/* <ButtonPill type="white">Getting started</ButtonPill> */}
        </VerticalRow>
        <CodeBlock />
      </TwoColumn>
    </VerticalSection>
  );
}
