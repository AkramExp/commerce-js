import styled from "styled-components";
import MainSection from "../../ui/MainSection";
import VerticalRow from "../../ui/VerticalRow";
import MainHeading from "../../ui/MainHeading";
// import Button from "../../ui/Button";

const Img = styled.img`
  position: relative;
  right: -3rem;
  width: 100%;

  @media screen and (max-width: 500px) {
    right: 0;
  }
`;

export default function Section1() {
  return (
    <MainSection>
      <VerticalRow>
        <MainHeading>
          What is Headless Commerce?
          <span>
            Learn what it means, comparisons to other types of commerce, and why
            it&apos;s the future for eCommerce businesses.
          </span>
        </MainHeading>
        {/* <Button type="purple">Speak to a headless expert</Button> */}
      </VerticalRow>
      <Img src="/APIheadlessslice__1_.png" />
    </MainSection>
  );
}
