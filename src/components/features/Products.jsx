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

export default function Products() {
  const items = [
    {
      title: "Unlimited products",
      text: "Sell unlimited physical or digital products. Combine both physical and digital products in the same cart and checkout.",
      button: "PRODUCT ATTRIBUTES",
    },
    {
      title: "Categories and sub-categories",
      text: "Create infinitely nestable categories for product groups and collections. Add assets and descriptions to categories.",
      button: "ADDING CATEGORIES",
    },
    {
      title: "Variants",
      text: "Sizes, colors, shapes, set the price and quantity for each of your variants. Add as many options as you want.",
      button: "ADDING VARIANTS",
    },
    {
      title: "Custom product data",
      text: "Model product attributes and store any type of information on a product like size, weight, or reviews.",
      button: "PRODUCT ATTRIBUTES",
    },
    {
      title: "Related products",
      text: "Set relationships between your products so customers can browse products easily and add cart upsells.",
      button: "RELATED PRODUCTS",
    },
    {
      title: "PWYW pricing",
      text: "Set a minimum price and let your customers decide how much they want to pay at the checkout.",
      button: "PWYW PRICING",
    },
    {
      title: "Discount codes",
      text: "Set percentage or fixed rate discounts. Customize expiry dates and products discounts apply to.",
      button: "CREATING DISCOUNTS",
    },
  ];

  return (
    <Section id="products">
      <SectionHeading>
        Products
        <span>
          Sell physical and digital products anyway, anywhere you want.
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
