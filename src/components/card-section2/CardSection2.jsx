import styled from "styled-components";
import Card from "./Card";

const CardSection = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export default function CardSection2() {
  const items = [
    {
      icon: "APIicons.svg",
      title: "Products API",
      text: "Store and request product data from any source to display on your frontend. Supports complex variants, physical products, and digital products.",
      button: "products api",
    },
    {
      icon: "APIicons.svg",
      title: "Cart API",
      text: "Store product data, product variants, quantity, price, and other metadata to generate a checkout token and capture an order from your customer.  ",
      button: "cart api",
    },
    {
      icon: "APIicons.svg",
      title: "Checkout API",
      text: "Capture data sent from the cart along with line item data, line item IDs, any shipping or billing information as well as tax and shipping rates.",
      button: "checkout api",
    },
  ];

  return (
    <CardSection>
      {items.map((item) => {
        return <Card item={item} key={item.title} />;
      })}
    </CardSection>
  );
}
