import MarginSection from "../../ui/MarginSection";
import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import VerticalRow from "../../ui/VerticalRow";
// import ButtonPill from "../../ui/ButtonPill";
import TwoColumn from "../../ui/TwoColumn";
import SmallHeading1 from "../../ui/SmallHeading1";
import Para1 from "../../ui/Para1";

const Section = styled.div`
  padding: 4rem 12rem;
  background-color: var(--dark-1);

  @media screen and (max-width: 500px) {
    padding: 4rem 1rem;
  }
`;

const Img = styled.img`
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export default function Section6() {
  return (
    <MarginSection>
      <Section>
        <SectionHeading type="white">
          Commerce rewritten for developers
          <span>
            Changing the way eCommerce is designed, developed, and shipped.
          </span>
        </SectionHeading>
        <TwoColumn>
          <Img src="/APIStackdark.svg" />
          <VerticalRow>
            <SmallHeading1 type="blue">Commerce simplified</SmallHeading1>
            <Para1 type="white">
              Create customizable, high performing purchasing experiences
              without writing any backend code.
            </Para1>
            {/* <ButtonPill type="white">See documentation</ButtonPill> */}
          </VerticalRow>
        </TwoColumn>
      </Section>
    </MarginSection>
  );
}
