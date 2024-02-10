import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import Card from "./Card";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem 2rem;
  background-color: var(--light-blue-5);
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

export default function Fulfillment() {
  const items = [
    {
      title: "Shipping zones",
      text: "Ship your products anywhere. Set global shipping zones, down to the state/province/regional level.",
      button: "SHIPPING RATES",
    },
    {
      title: "Carrier tracking",
      text: "Provide fulfillment tracking by integrating with any shipping carrier and notifying the customer.",
      button: "FULFILLING ORDERS",
    },
    {
      title: "Digital delivery",
      text: "Upload and send multiple digital files for delivery. Music, videos, eBooks, and more (up to 4GB per file).",
      button: "DIGITAL FILES",
    },
    {
      title: "Digital access windows",
      text: "Set access windows for digital goods, e.g. download links expire in 2 days and can be used 3 times.",
      button: "MANAGING ACCESS",
    },
    {
      title: "Fulfillment integrations",
      text: "Integrate with a 3rd party shipping provider or 3PL to manage your fulfillments on your behalf.",
      button: "SHIPPING INTEGRATIONS",
    },
    {
      title: "In store pickup",
      text: "Give customers the option to pay on pick up in store, or pay now and curbside pickup.",
      button: "",
    },
  ];

  return (
    <Section id="fulfillment">
      <SectionHeading>
        Fulfillment
        <span>Built-in fulfillment for digital and physical products.</span>
      </SectionHeading>
      <SmallSection>
        {items.map((item) => {
          return <Card item={item} key={item.title} />;
        })}
      </SmallSection>
    </Section>
  );
}
