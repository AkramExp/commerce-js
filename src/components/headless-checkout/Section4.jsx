import styled from "styled-components";
import Card from "./Card";
import SectionHeading from "../../ui/SectionHeading";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardSection = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
`;

export default function Section4() {
  const items = [
    {
      icon: "B2B",
      title: "B2B",
      text: "Tailored for business specific orders and transactions. Every type of customer can have a unique payment and order form.",
    },
    {
      icon: "AB",
      title: "A/B testing",
      text: "Optimize your checkout overtime to boost conversions and increase total value of your shopping cart.",
    },
    {
      icon: "Embedded",
      title: "Embedded transactions",
      text: "Place a checkout inside video games, virtual environments, IOT devices, 3rd party applications and more.",
    },
    {
      icon: "crypto",
      title: "Crypto & multi-gateway",
      text: "Give customers the choice on how they pay for their products or NFTs. Brinh your own fiat or blockchain backed gateway.",
    },
    {
      icon: "QRcode",
      title: "QR code activated",
      text: "Scan and buy with QR codes that direct customers to specific checkouts based on location, event and product being sold.",
    },
    {
      icon: "Socialcom",
      title: "Social commerce",
      text: "Optimize your checkout for any social platform. Contextually capture the purchasing intent from your customers.",
    },
  ];

  return (
    <Section>
      <SectionHeading>Accept orders and payments anywhere</SectionHeading>
      <CardSection>
        {items.map((item) => {
          return <Card item={item} key={item.icon} type="dynamic" />;
        })}
      </CardSection>
    </Section>
  );
}
