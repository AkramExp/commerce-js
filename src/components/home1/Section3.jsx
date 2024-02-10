import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import VerticalSection from "../../ui/VerticalSection";

const Img = styled.img`
  width: 100%;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export default function Section3() {
  return (
    <VerticalSection>
      <SectionHeading>
        Use Commerce.js alongside your existing provider
        <span>Replatforming is optional.</span>
      </SectionHeading>
      <Img src="/products-orders.png" />
    </VerticalSection>
  );
}
