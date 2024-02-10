import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import Card from "./Card";
import VerticalSection from "../../ui/VerticalSection";

const CardSection = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    gap: 3rem;
  }
`;

export default function Section6() {
  const items = [
    {
      icon: "checkouticon",
      title: "Customization",
      text: "Choose what data to collect from customers at the checkout. Design the look and feel of your payment form.",
    },
    {
      icon: "hybrid",
      title: "Lives anywhere",
      text: "Place a headless checkout where you want customers to buy. Blogs, product pages, mobile apps, link from social or campaign sites.",
    },
    {
      icon: "iconses",
      title: "Optimized",
      text: "Create a checkout specifically for your business and use case. Optimize conversion rate with A/B testing.",
    },
  ];

  return (
    <VerticalSection>
      <SectionHeading>Benefits of headless</SectionHeading>
      <CardSection>
        {items.map((item) => {
          return <Card item={item} key={item.icon} type="static" />;
        })}
      </CardSection>
    </VerticalSection>
  );
}
