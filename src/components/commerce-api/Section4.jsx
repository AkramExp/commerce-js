import SectionHeading from "../../ui/SectionHeading";
import MarginSection from "../../ui/MarginSection";
import VerticalSection from "../../ui/VerticalSection";
import Carousel2 from "../carousel2/Carousel2";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 37rem;
  @media screen and (max-width: 500px) {
    position: relative;
    height: 40rem;
    background-color: var(--dark-3);
  }
`;

export default function Section4() {
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
