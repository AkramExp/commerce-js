import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import MarginSection from "../../ui/MarginSection";
import Carousel2 from "../carousel2/Carousel2";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-3);
  padding: 6rem 0;
`;

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 48rem;
  width: 75%;
  @media screen and (max-width: 500px) {
    position: relative;
    height: 40rem;
    background-color: var(--dark-3);
  }
`;

export default function Section6() {
  return (
    <MarginSection>
      <Section>
        <Div>
          <SectionHeading type="white">
            Built for frontend teams
            <span>Use the frontend framework of your choice.</span>
          </SectionHeading>
          <Carousel2 />
        </Div>
      </Section>
    </MarginSection>
  );
}
