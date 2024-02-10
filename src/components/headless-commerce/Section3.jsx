import VerticalSection from "../../ui/VerticalSection";
import SectionHeading from "../../ui/SectionHeading";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
// import ButtonPill from "../../ui/ButtonPill";
import styled from "styled-components";
import Text from "./Text";

const Img = styled.img`
  position: relative;
  right: -3rem;
  width: 100%;

  @media screen and (max-width: 500px) {
    right: 0;
  }
`;

export default function Section3() {
  return (
    <VerticalSection>
      <SectionHeading>
        Traditional eCommerce vs Headless Commerce
      </SectionHeading>
      <TwoColumn>
        <VerticalRow>
          <Text>
            Traditional eCommerce platforms have coupled front and backends, are
            rigid in their architecture, and lack flexibility for complex
            business logic. These platforms are template driven and provide a
            proprietary plugin framework for customizations and extensions.
            <br />
            <br />
            <span>Headless commerce</span> enables the decoupling of the
            frontend from the backend, allowing for deeper control over the
            customer experience, site speed, and integrations that support
            unique business logic. Headless commerce solutions are technology
            agnostic and so can be implemented into any device or channel where
            there are customers.
          </Text>
          {/* <ButtonPill type="purple">Read more</ButtonPill> */}
        </VerticalRow>
        <Img src="public/tradvshead.jpg" />
      </TwoColumn>
    </VerticalSection>
  );
}
