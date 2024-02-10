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

export default function Content() {
  const items = [
    {
      icon: "Contentful_logo",
      title: "Contentful",
      text: "An API-first content platform to create, manage and publish content across every digital channel.",
    },
    {
      icon: "Sanityicon",
      title: "Sanity",
      text: "Build structured content and engaging digital experiences across channels in real-time.",
    },
    {
      icon: "Buildericonon",
      title: "Builder",
      text: "Build and optimize digital experiences for any tech stack with full control, visually.",
    },
  ];

  return (
    <Section id="content">
      <SectionHeading>
        Content
        <span>Manage the content on your eCommerce website or application</span>
      </SectionHeading>
      <SmallSection>
        {items.map((item) => {
          return <Card item={item} key={item.icon} />;
        })}
      </SmallSection>
    </Section>
  );
}
