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

export default function Storefront() {
  const items = [
    {
      title: "Hosted or custom experiences",
      text: "Start with a hosted storefront, or build your own and connect with a CMS or storefront builder.",
      button: "FOR BUSINESSES",
    },
    {
      title: "Front-end freedom",
      text: "Use the front-end technology you want to create your desired eCommerce experience.",
      button: "FRONTEND FRAMEWORKS",
    },
    {
      title: "Design customization",
      text: "Start with our open source storefronts, or design and build your own from scratch.",
      button: "VIEW ON GITHUB",
    },
    {
      title: "Decoupled front-end",
      text: "Incrementally optimize the frontend and the backend of your eCommerce at your own pace.",
      button: "HEADLESS COMMERCE",
    },
  ];

  return (
    <Section id="storefront">
      <SectionHeading>
        Storefront
        <span>
          Complete design freedom to create the best purchasing experiences for
          customers.
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
