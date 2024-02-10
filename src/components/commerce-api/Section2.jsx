import VerticalSection from "../../ui/VerticalSection";
import SectionHeading from "../../ui/SectionHeading";
import styled from "styled-components";
import Card from "./Card";

const CardSection = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export default function Section2() {
  const items = [
    {
      title: "Products API",
      text: "Requests to the products endpoint return the full product data object with properties like name, description, price, variants, quality and extra fields.",
    },
    {
      title: "Cart API",
      text: "Store line item data, metadata, and calculate cart totals for the customer's session. Use the cart ID to generate a checkout token and capture the order",
    },
    {
      title: "Checkout API",
      text: "A checkout captues data sent from the cart along with the item information, line item IDs, any shipping or billing information as well as tax and shipping rates.",
    },
    {
      title: "Discount API",
      text: "Create discounts for the products and checkuts programmatically. Set start dates and expiry dataes, and choose between $ or % based discounts.",
    },
    {
      title: "Categories API",
      text: "Group your products with infinitely nestable categories. Get a specific category by its ID. Products can be associated with more than one category.",
    },
    {
      title: "Orders API",
      text: "Returs orders placed on your account. Send order data other sources to view and process. Search orders with a free text query filter.",
    },
    {
      title: "Customers API",
      text: "The customers endpoints accepts an email argument which is used to resolve a customer in your account and send them a one click login email.",
    },
    {
      title: "Giftcards API",
      text: "Sell giftcards of any value to be used as payment towards future orders. Iclude giftcards as stand alone products or as upsells in your cart.",
    },
    {
      title: "Merchants API",
      text: "Interact with your merchant accounts at the API level. Programmatically configure and automate all data assosiated with your merchant accounts.",
    },
  ];

  return (
    <VerticalSection>
      <SectionHeading type="white">
        Storefront to receipt APIs
        <span>Explore our APIs for commerce.</span>
      </SectionHeading>
      <CardSection>
        {items.map((item) => {
          return <Card item={item} key={item.title} />;
        })}
      </CardSection>
    </VerticalSection>
  );
}
