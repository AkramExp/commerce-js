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

export default function Orders() {
  const items = [
    {
      title: "Order management",
      text: "Manage orders and customers through our admin dashboard, or send data to your OMS or CRM.",
      button: "LEARN MORE",
    },
    {
      title: "Refunds",
      text: "Refund orders from the dashboard and send confirmation emails to your customers.",
      button: "REFUNDS",
    },
    {
      title: "GDPR",
      text: "Easily update and delete customer order and personal data on orders when requested.",
      button: "GDPR COMPLIANCE",
    },
    {
      title: "Order notes",
      text: "Admin users can record internal notes against specific orders to keep track of internal processes.",
      button: "EXPLORE DASHBOARD",
    },
  ];

  return (
    <Section id="orders">
      <SectionHeading>
        Orders
        <span>View and manage orders from our dashboard.</span>
      </SectionHeading>
      <SmallSection>
        {items.map((item) => {
          return <Card item={item} key={item.title} />;
        })}
      </SmallSection>
    </Section>
  );
}
