import styled from "styled-components";
import PriceCard from "./PriceCard";
import MarginSection from "../../ui/MarginSection";

const Section = styled.section`
  padding: 6rem 0;
  display: flex;
  justify-content: center;
  background-color: var(--light-blue-5);
`;

const Div = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  padding: 4rem 1rem;
  box-shadow: var(--shadow);

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export default function Section2() {
  const items = [
    {
      icon: "star",
      title: "Developer",
      price: "Free",
      rows: [
        "No transaction fee",
        "Access to test gateway",
        "Full API access",
        "Multi-Merchant support",
        "Unlimited products",
        "300 variants per product",
        "Unlimited webhooks",
        "Physical and digital products",
      ],
      button: "white2",
    },
    {
      icon: "square",
      title: "Standard",
      price: 0,
      rows: [
        "2% transaction fee",
        "Minimum monthly fee of $10",
        "+ Payment gateway fee",
        "Full API access",
        "Multi-Merchant support",
        "Unlimited products",
        "300 variants per product",
        "Unlimited webhooks",
        "Physical and digital products",
        "No monthly revenue ceiling",
        "No overage fee",
      ],
      button: "white2",
    },
    {
      icon: "circle",
      title: "Pro",
      price: 79,
      rows: [
        "No transaction fee",
        "+ Payment gateway fee",
        "Full API access",
        "Multi-Merchant support",
        "Unlimited products",
        "600 variants per product",
        "Unlimited webhooks",
        "Physical and digital products",
        "In-app support",
        "$10,000.00 monthly ceiling",
        "1.5% overage fee",
      ],
      button: "green",
    },
    {
      icon: "triangle",
      title: "Rise",
      price: 349,
      rows: [
        "No transaction fee",
        "+ Payment gateway fee",
        "Full API access",
        "Multi-Merchant support",
        "Unlimited products",
        "600 variants per product",
        "Unlimited webhooks",
        "Physical and digital products",
        "In-app support",
        "$100,000.00 monthly ceiling",
        "1% overage fee",
      ],
      button: "green",
    },
  ];

  return (
    <MarginSection>
      <Section>
        <Div>
          {items.map((item) => {
            return <PriceCard key={item.title} item={item} />;
          })}
        </Div>
      </Section>
    </MarginSection>
  );
}
