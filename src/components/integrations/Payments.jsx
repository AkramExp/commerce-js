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

export default function Payments() {
  const items = [
    {
      icon: "Stripelogoonly",
      title: "Stripe",
      text: "Payments infrastructure and APIs for internet businesses.",
    },
    {
      icon: "Company_braintree",
      title: "Braintree",
      text: "Web and mobile payment APIs for growing businesses.",
    },
    {
      icon: "Company_Square",
      title: "Square",
      text: "Connect your Square account and accept payments at checkout with Square's payment APIs.",
    },
    {
      icon: "Company_razorpay",
      title: "Razorpay",
      text: "Accept payments in India with Razorpay's suite of payment APIs and payouts platform.",
    },
    {
      icon: "Paystacklogofinal",
      title: "Paystack",
      text: "Payment gateway and APIs for Nigeria, Ghana, and South Africa.",
    },
    {
      icon: "Company_Omise",
      title: "Omise",
      text: "Payment gateway and APIs for Thailand, Japan and Singapore.",
    },
    {
      icon: "Company_PayPal",
      title: "PayPal",
      text: "Accept payments from customers at checkout with PayPal.",
    },
    {
      icon: "Socialcom",
      title: "BYO",
      text: "Bring your own payment gateway to integrate at checkout.",
    },
  ];

  return (
    <Section id="payments">
      <SectionHeading>
        Payments
        <span>Accept payments from customers</span>
      </SectionHeading>
      <SmallSection>
        {items.map((item) => {
          return <Card item={item} key={item.icon} />;
        })}
      </SmallSection>
    </Section>
  );
}
