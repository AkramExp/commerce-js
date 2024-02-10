import styled from "styled-components";
import Checkout from "./Checkout";
import Products from "./Products";
import Orders from "./Orders";
import Fulfillment from "./Fulfillment";
import Reporting from "./Reporting";
import Storefront from "./Storefront";
import Developers from "./Developers";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ContentSection() {
  return (
    <Section>
      <Checkout />
      <Products />
      <Orders />
      <Fulfillment />
      <Reporting />
      <Storefront />
      <Developers />
    </Section>
  );
}
