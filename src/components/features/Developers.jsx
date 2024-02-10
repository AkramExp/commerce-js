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

export default function Developers() {
  const items = [
    {
      title: "Commerce APIs",
      text: "Flexible, scalable commerce APIs for products, carts, checkouts, customers and more.",
      button: "EXPLORE APIS",
    },
    {
      title: "Webhooks",
      text: "Configure callback URLs and subscribe them to various events in the Chec Dashboard.",
      button: "EXPLORE WEBHOOKS",
    },
    {
      title: "CLI",
      text: "NPM install @chec/cli from the command line. Launch demos, call APIs, fetch and stream logs.",
      button: "VIEW CLI",
    },
    {
      title: "Open integrations",
      text: "Flexible integrations powered by open source serverless functions that you control.",
      button: "LEARN MORE",
    },
    {
      title: "Checkout helpers",
      text: "Integration helpers that assist with common eCommerce calls made during the checkout.",
      button: "EXPLORE HELPERS",
    },
    {
      title: "Enterprise CDN",
      text: "Reliably serve your eCommerce data and assets using our globally distributed content delivery network.",
      button: "VIEW STATUS",
    },
    {
      title: "Static site ready",
      text: "Offload all the grunt work to us and create static websites powered by Commerce.js.",
      button: "EXPLORE JAMSTACK",
    },
  ];

  return (
    <Section id="developers">
      <SectionHeading>
        Developers
        <span>
          Purpose-built for developers building and scaling eCommerce
          businesses.
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
