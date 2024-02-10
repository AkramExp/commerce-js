import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import VerticalSection from "../../ui/VerticalSection";
import Carousel1 from "../carousel1/Carousel1";

const Div = styled.div`
  position: relative;
  height: 35rem;

  @media screen and (max-width: 760px) {
    height: 50rem;
  }
`;

export default function Section7() {
  return (
    <Div>
      <VerticalSection>
        <SectionHeading>
          Flexible. Composable. Headless.
          <span>Brands selling with Commerce.js.</span>
        </SectionHeading>
        <Carousel1 />
      </VerticalSection>
    </Div>
  );
}
