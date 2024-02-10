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

export default function Shipping() {
  const items = [
    {
      icon: "Company_EasyPost",
      title: "EasyPost",
      text: "A highly reliable and flexible suite of logistics solutions that help to boost brand loyalty.",
    },
    {
      icon: "Company_Shippo",
      title: "Shippo",
      text: "Multi-carrier shipping software for eCommerce businesses.",
    },
  ];

  return (
    <Section id="shipping">
      <SectionHeading>
        Shipping
        <span>
          Manage shipping rates, labels, returns, and tracking across shipping
          carriers
        </span>
      </SectionHeading>
      <SmallSection>
        {items.map((item) => {
          return <Card item={item} key={item.icon} />;
        })}
      </SmallSection>
    </Section>
  );
}
