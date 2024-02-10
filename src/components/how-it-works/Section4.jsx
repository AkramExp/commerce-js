import styled from "styled-components";
// import ButtonPill from "../../ui/ButtonPill";
import SectionHeading from "../../ui/SectionHeading";
import CodeBlock1 from "./CodeBlock1";
import CodeBlock2 from "./CodeBlock2";
import CodeBlock3 from "./CodeBlock3";
import CodeBlock4 from "./CodeBlock4";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
import SmallHeading2 from "../../ui/SmallHeading2";
import Para2 from "../../ui/Para2";
import MarginSection from "../../ui/MarginSection";

const Section = styled.section`
  background-color: var(--dark-blue-1);
  padding: 4rem 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    padding: 4rem 1rem;
  }
`;

const Img = styled.img`
  width: 100%;
`;

export default function Section4() {
  return (
    <MarginSection>
      <Section>
        <SectionHeading type="white">
          For developers
          <span>Install, integrate, and extend your commerce.</span>
        </SectionHeading>

        <TwoColumn>
          <VerticalRow>
            <SmallHeading2>1. Install and authenticate</SmallHeading2>
            <Para2>
              Simply <span>npm install</span> or{" "}
              <span>yarn add @chec/commerce.js</span>. Then create a new
              Commerce instance and add your public API key.
            </Para2>
            {/* <ButtonPill type="white">Getting started</ButtonPill> */}
          </VerticalRow>
          <CodeBlock1 />
        </TwoColumn>

        <TwoColumn>
          <VerticalRow>
            <SmallHeading2>2. List your products</SmallHeading2>
            <Para2>
              List and retrieve products and categories from your account and
              display them on any frontend.
            </Para2>
            {/* <ButtonPill type="white">Explore sdk docs</ButtonPill> */}
          </VerticalRow>
          <CodeBlock2 />
        </TwoColumn>

        <TwoColumn>
          <VerticalRow>
            <SmallHeading2>3. Create a cart</SmallHeading2>
            <Para2>
              Store product data, product variants, quantity, price, and other
              metadata to generate a checkout.
            </Para2>
            {/* <ButtonPill type="white">Explore sdk docs</ButtonPill> */}
          </VerticalRow>
          <CodeBlock3 />
        </TwoColumn>

        <TwoColumn>
          <VerticalRow>
            <SmallHeading2>4. Create a checkout</SmallHeading2>
            <Para2>
              Build custom checkouts and integrations. Our built-in checkout
              helpers guide you through the integration, making the checkout
              implementation approachable and fast.
            </Para2>
            {/* <ButtonPill type="white">Documentation for checkout</ButtonPill> */}
          </VerticalRow>
          <CodeBlock4 />
        </TwoColumn>

        <TwoColumn>
          <VerticalRow>
            <SmallHeading2>5. Extend and experiment</SmallHeading2>
            <Para2>
              Now you can integrate commerce anywhere. Design and implement any
              experience or integration that comes to mind. Welcome to the new
              way of building eCommerce.
            </Para2>
            {/* <ButtonPill type="white">View community articles</ButtonPill> */}
          </VerticalRow>
          <Img src="/API_final.svg" alt="" />
        </TwoColumn>
      </Section>
    </MarginSection>
  );
}
