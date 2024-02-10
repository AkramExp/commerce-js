import SectionHeading from "../../ui/SectionHeading";
import MarginSection from "../../ui/MarginSection";
import VerticalSection from "../../ui/VerticalSection";
import Carousel3 from "../carousel3/Carousel3";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  height: 48rem;

  @media screen and (max-width: 500px) {
    position: relative;
    height: 46rem;
  }
`;

export default function Section7() {
  return (
    <Div>
      <MarginSection>
        <VerticalSection>
          <SectionHeading type="white">
            Developers ❤️ Commerce.js
            <span>Headless eCommerce for everyone.</span>
          </SectionHeading>
          <Carousel3 />
        </VerticalSection>
      </MarginSection>
    </Div>
  );
}
