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
  gap: 4rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export default function CommercePlatform() {
  const items = [
    {
      icon: "Shopifyicononly",
      title: "Shopify",
      text: "Extend the capabilities of your Shopify store by creating Commerce.js powered checkouts and experiences.",
    },
    {
      icon: "BigCommerce_icon",
      title: "BigCommerce",
      text: "Increase agility for your BigCommerce store and create Commerce.js powered microsites, checkouts and campaigns.",
    },
    {
      icon: "Magentoicon",
      title: "Magento",
      text: "Improve sales performance for your Magento site with a Commerce.js checkout, campaign site or microsite.",
    },
    {
      icon: "Woocommerceicon",
      title: "WooCommerce",
      text: "Import your product catalog from WooCommerce or push new orders back to your WooCommerce account.",
    },
    {
      icon: "EBay_logo",
      title: "Ebay",
      text: "Sell your ebay products direct to consumers via your website or mobile application.",
    },
    {
      icon: "Wix.com_website_logo",
      title: "Wix",
      text: "Extend your Wix storefront to sell in new and creative ways.",
    },
    {
      icon: "amazon",
      title: "Amazon",
      text: "Sell your product catalog direct to customers through your own website or application.",
    },
    {
      icon: "presta",
      title: "PrestaShop",
      text: "Extend your PrestaShop catalog to sell in smarter, more creative ways.",
    },
  ];

  return (
    <Section id="commercePlatform">
      <SectionHeading>
        Commerce Platform
        <span>Import products and sync orders with your existing platform</span>
      </SectionHeading>
      <SmallSection>
        {items.map((item) => {
          return <Card type="white" item={item} key={item.icon} />;
        })}
      </SmallSection>
    </Section>
  );
}
