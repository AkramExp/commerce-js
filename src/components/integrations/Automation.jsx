import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import Card from "./Card";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem 2rem;
`;

const SmallSection = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export default function Automation() {
  const items = [
    {
      icon: "Company_Alloy",
      title: "Alloy Automation",
      text: "A no-code ecommerce automation tool for automate tedious tasks across fulfillments, marketing, and sales.",
    },
  ];

  return (
    <Section id="automation">
      <SectionHeading>
        Automation
        <span>Automate your online business</span>
      </SectionHeading>
      <SmallSection>
        {items.map((item) => {
          return <Card item={item} key={item.icon} />;
        })}
      </SmallSection>
    </Section>
  );
}
