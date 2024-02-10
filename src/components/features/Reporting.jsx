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

export default function Reporting() {
  const items = [
    {
      title: "Business overview",
      text: "Quickly view your sales performance MoM, orders made and top performing products.",
      button: "EXPLORE DASHBOARD",
    },
    {
      title: "Multi-Language",
      text: "Dashboard language support for English, Spanish, Japanese, German, French, Italian, and Portuguese.",
      button: "LANGUAGE SETUP",
    },
    {
      title: "Data export",
      text: "Export data in CSV format to share with your accounts team and analyze with other tools.",
      button: "EXPORT ORDERS",
    },
    {
      title: "Developer logs",
      text: "View sucessful and failed API requests of your integration from our developer dashboard.",
      button: "VIEWING LOGS",
    },
  ];

  return (
    <Section id="reporting">
      <SectionHeading>
        Reporting
        <span>
          Track the performance of your business sales, orders, and customers.
        </span>
      </SectionHeading>
      <SmallSection>
        {items.map((item) => {
          return <Card item={item} key={item.title} />;
        })}
      </SmallSection>
    </Section>
  );
}
