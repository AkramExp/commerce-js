import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import Card from "./Card";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem 2rem;
  margin-top: -8rem;
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

export default function Checkout() {
  const items = [
    {
      title: "Payment gateways",
      text: "Support credit cards at the checkout with Stripe, Square, Braintree, Omise, PayPal or Razorpay.",
      button: "SUPPORTED GATEWAYS",
    },
    {
      title: "BYO payment gateway",
      text: "Accept payments in your region and integrate a local payment gateway with our manual gateway integration.",
      button: "LEARN MORE",
    },
    {
      title: "Custom checkout",
      text: "Use our Checkout API to create unique checkout designs, flows, and data collection.",
      button: "HEADLESS CHECKOUT",
    },
    {
      title: "Guest checkout",
      text: "Create a member login checkout or streamline the purchasing flow with a guest checkout.",
      button: "CHECKOUT API",
    },
    {
      title: "Currency support",
      text: "Support for all major currencies, including USD, EUR, GBP, CAD, NZD, JPY, SEK, AUD.",
      button: "VIEW CURRENCIES",
    },
    {
      title: "Global sales tax",
      text: "Global sales tax support with alternative rates for digital goods. Set tax rates at the regional level.",
      button: "TAX SUPPORT",
    },
    {
      title: "BYO Tax provider",
      text: "Disable our built in tax and bring your own tax API to handle your complex tax requirements.",
      button: "READ GUIDE",
    },
    {
      title: "Extra fields",
      text: "Create custom data fields to collect during the checkout. Make them required or optional for customers.",
      button: "ADDING EXTRA FIELDS",
    },
  ];

  return (
    <Section id="checkout">
      <SectionHeading>
        Checkout
        <span>
          Total control over the most important part of the customer experience.
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
