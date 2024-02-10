import styled from "styled-components";
import Content from "./Content";
import Payments from "./Payments";
import Search from "./Search";
import Communication from "./Communication";
import Shipping from "./Shipping";
import Tax from "./Tax";
import Automation from "./Automation";
import CommercePlatform from "./CommercePlatform";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ContentSection() {
  return (
    <Section>
      <Content />
      <Payments />
      <Search />
      <Communication />
      <Shipping />
      <Tax />
      <Automation />
      <CommercePlatform />
    </Section>
  );
}
