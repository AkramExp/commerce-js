import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import Card from "./Card";
import MarginSection from "../../ui/MarginSection";

const Section = styled.section`
  padding: 4rem 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--light-blue-5);

  @media screen and (max-width: 500px) {
    padding: 4rem 1rem;
  }
`;

const List = styled.div`
  margin-top: 4rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export default function Section4() {
  const items = [
    {
      title: "How does pricing work?",
      text: "Depending on the pricing tier you select, we charge a transaction fee on your sales or a monthly fee (Pro, Rise, Enterprise). Fees are charged monthly or when your accrued fees exceed $200 (USD). Payment is made by adding a billable card to your account. Our pricing does not include payment gateway fees.",
    },
    {
      title: "What happens when I hit my monthly revenue ceiling?",
      text: "When you reach the sales limit for your chosen plan, you will be charged the overage % fee for every transaction over the plan ceiling until the month's end. Eg On the Rise Plan (revenue ceiling $100k), if you made $120k sales in that month, you'd only pay 1% on the additional $20k ($100) on top of the $799, totaling $549 billed for the month. The overage fees are as follows; Standard 0%, Pro 1.5%, Rise - 1%.",
    },
    {
      title: "What rate limits does my account come with?",
      text: "Our API employs rates limits to protect against bursts of incoming traffic to help maximize API performance for all businesses using our infrastructure. All accounts have a default rate limit of 270 requests per minute. You can increase this rate limit by contacting us directly.",
    },
    {
      title: "What's the difference between Commerce.js and Chec?",
      text: "Chec is the name of our eCommerce logic layer and dashboard product (Chec Dashboard). Commerce.js is our flagship JavaScript SDK for developers and designers to build custom eCommerce.",
    },
    {
      title: "Is Chec/Commerce.js a payment gateway?",
      text: "We are not a payment gateway. We focus on eCommerce functionality specifically. We have several payment gateways pre-integrated as well as a manual gateway you can use to BYO gateway.",
    },
    {
      title:
        "Does Commerce.js work with my existing CMS or frontend framework?",
      text: "Yes, Commerce.js can be integrated anywhere. Any frontend framework, any CMS, any smart device. Create shopping experiences in AR, VR, web, mobile. Check out our documentation for guides and community articles using different technologies and frontend frameworks.",
    },
    {
      title: "Is custom pricing available?",
      text: "Yes, we have custom pricing plans available for those business who are processing high sales volumes, or who are a non profit/charity. Please get in touch.",
    },
    {
      title: "Do you provide dedicated support?",
      text: "All accounts come with standard in-app support. We have several support plans available for those businesses who require dedicated support. Please get in touch with us to discuss your requirements.",
    },
  ];

  return (
    <MarginSection>
      <Section>
        <SectionHeading>
          Frequently Asked Questions{" "}
          <span>Learn more about Commerce.js pricing and possibilities.</span>
        </SectionHeading>
        <List>
          {items.map((item) => {
            return <Card key={item.title} item={item} />;
          })}
        </List>
      </Section>
    </MarginSection>
  );
}
