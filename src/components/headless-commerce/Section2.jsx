import VerticalSection from "../../ui/VerticalSection";
import SectionHeading from "../../ui/SectionHeading";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
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

export default function Section2() {
  return (
    <VerticalSection>
      <SectionHeading>The meaning of Headless Commerce</SectionHeading>
      <TwoColumn>
        <VerticalRow>
          <Text>
            The term “Headless Commerce” is the concept of separating the
            frontend presentation layer “head” from the backend processing layer
            “body” through the use of <a>APIs</a>. A headless commerce backend
            solution therefore does not have a frontend or head (leaving you to
            create your customer facing views) and is instead responsible for
            handling commerce logic, such as <a>product</a> data, <a>cart</a>{" "}
            actions, and <a>checkout</a> processing, all via APIs.
            <br />
            <br />
            An eCommerce business that is truly &quot;headless&quot; utilizes
            APIs on the frontend and backend. For example, it is possible to use
            a headless frontend (API-driven) with a coupled backend (not
            API-driven). Headless frontends cater to the complexities around
            displaying data, whereas headless backends cater to the complexities
            around creating, managing, and customizing data.
          </Text>
        </VerticalRow>
        <Img src="public/Apifloat.gif" />
      </TwoColumn>
    </VerticalSection>
  );
}
