import SectionHeading from "../../ui/SectionHeading";
import styled from "styled-components";
import VerticalRow from "../../ui/VerticalRow";
import Para1 from "../../ui/Para1";
import Button from "../../ui/Button";
import SmallHeading1 from "../../ui/SmallHeading1";
import ButtonGroup from "../../ui/ButtonGroup";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  padding: 4rem 0;
`;

const Div = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 5rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export default function Section8() {
  const navigate = useNavigate();

  const items = [
    {
      icon: "APIicons.svg",
      title: "Products API",
      text: "Store and request product data from any source to display on your frontend. Supports complex variants, physical products, and digital products.",
      // button: "products api",
    },
    {
      icon: "APIicons.svg",
      title: "Checkout API",
      text: "Capture data sent from the cart along with line item data, line item IDs, any shipping or billing information as well as tax and shipping rates.",
      // button: "checkout api",
    },
  ];

  return (
    <Section>
      <SectionHeading>Your unified suite of Commerce APIs</SectionHeading>
      <Div>
        <VerticalRow>
          <SmallHeading1>Get started today</SmallHeading1>
          <Para1>
            Start your integration — no contracts or banking details required.
            Contact us to create a custom package for your business.
          </Para1>
          <ButtonGroup>
            <Button type="green" onClick={() => navigate("/signup")}>
              Create account
            </Button>
            <Button type="purple" onClick={() => navigate("/contact")}>
              Contact sales
            </Button>
          </ButtonGroup>
        </VerticalRow>
        <Card item={items[0]} />
        <Card item={items[1]} />
      </Div>
    </Section>
  );
}
