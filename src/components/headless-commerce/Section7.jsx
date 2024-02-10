import styled from "styled-components";
// import ButtonPill from "../../ui/ButtonPill";
import SectionHeading from "../../ui/SectionHeading";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
import VerticalSection from "../../ui/VerticalSection";
import Text from "./Text";

const Img = styled.img`
  width: 100%;
`;

export default function Section7() {
  return (
    <VerticalSection>
      <SectionHeading>Evaluating headless for your business</SectionHeading>
      <TwoColumn>
        <VerticalRow>
          <Text>
            Evaluating the benefits and capabilities of a headless commerce
            solution can be difficult. Every business has different reasons to
            move away from an all-in-one, monolithic approach to commerce. We
            created HeadlessCommerce.org to help business builders configure a
            best-of-breed stack using API driven services.
            <br /> <br />
            Browse this list of curated services that go beyond commerce and
            help you identify solutions for content, storefronts, payments,
            search, authentication, shipping, and more.
          </Text>
          {/* <ButtonPill type="dark">visit headlesscommerce.org</ButtonPill> */}
        </VerticalRow>
        <Img src="/hcinbrowser.png" />
      </TwoColumn>
    </VerticalSection>
  );
}
