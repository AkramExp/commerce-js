// import ButtonPill from "../../ui/ButtonPill";
import SectionHeading from "../../ui/SectionHeading";
import VerticalRow from "../../ui/VerticalRow";
import VerticalSection from "../../ui/VerticalSection";
import Text from "./Text";

export default function Section5() {
  return (
    <VerticalSection>
      <SectionHeading>Evolution of the eCommerce platform</SectionHeading>
      <br /> <br /> <br />
      <VerticalRow>
        <Text>
          From the early days of the web, the dot com boom, to the rise of SaaS,
          how we do business and consume online has changed dramatically over
          the years.
          <br /> <br />
          In the early 00s, traditional eCommerce platforms were created to help
          retail businesses open new digital channels. This new frontier for
          businesses was a challenge, resulting in platforms making opinionated
          decisions on behalf of businesses.
          <br /> <br />
          Fast forward to 2020 and how things have changed. Most businesses have
          an online first distribution model, business use cases and
          requirements are increasingly varied, and customers expect to be able
          to buy anywhere easily.
          <br /> <br />
          At Commerce.js, we are building commerce infrastructure for the next
          generation of businesses that demand control and flexibility over
          their commerce. Our infrastructure is built to accomodate and scale
          with the complex nature of modern businesses, supporting open
          integrations, custom logic, specific workflows, and today&apos;s
          customer&apos;s expectations.
        </Text>
        {/* <ButtonPill type="purple">Headless in 2020</ButtonPill> */}
      </VerticalRow>
    </VerticalSection>
  );
}
