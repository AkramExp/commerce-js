import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import VerticalSection from "../../ui/VerticalSection";

const Img = styled.img`
  margin-top: 3rem;
  width: 100%;
`;

export default function Section4() {
  return (
    <VerticalSection>
      <SectionHeading type="white">
        Commerce built for JavaScript developers
        <span>
          Build from scratch in vanilla JS or jumpstart your eCommerce project
          with a framework.
        </span>
      </SectionHeading>
      <Img src="public/Javascriptfrontends.png" />
    </VerticalSection>
  );
}
