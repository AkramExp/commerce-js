import SectionHeading from "../../ui/SectionHeading";
import MarginSection from "../../ui/MarginSection";
import VerticalSection from "../../ui/VerticalSection";
import Carousel2 from "../carousel2/Carousel2";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  height: 40rem;

  @media screen and (max-width: 500px) {
    height: 38rem;
  }
`;

export default function Section6() {
  return (
    <Div>
      <MarginSection>
        <VerticalSection>
          <SectionHeading type="white">
            Built for frontend teams
            <span>Use the frontend framework of your choice.</span>
          </SectionHeading>
          <Carousel2 />
        </VerticalSection>
      </MarginSection>
    </Div>
  );
}
