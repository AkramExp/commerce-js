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

export default function Tax() {
  const items = [
    {
      icon: "Company_taxjar",
      title: "TaxJar",
      text: "Sales tax compliance made effortless for eCommerce businesses.",
    },
  ];

  return (
    <Section id="tax">
      <SectionHeading>
        Tax
        <span>
          Dynamically calculate tax rates at checkout and satisfy compliance
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
