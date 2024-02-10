import styled from "styled-components";
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

const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  gap: 2rem;

  span {
    font-weight: 400;
    font-size: 1.1rem;
    text-align: center;
  }
`;

export default function Communication() {
  const items = [
    {
      icon: "Sendgrid_logo",
      title: "SendGrid",
      text: "Email API for transactional and marketing communication at scale.",
    },
    {
      icon: "Company_Slack",
      title: "Slack",
      text: "Where teams communicate, collaborate, and work.",
    },
    {
      icon: "klayviologo",
      title: "Klayvio",
      text: "Email + SMS marketing and automation platform for eCommerce.",
    },
    {
      icon: "image_69",
      title: "Omnisend",
      text: "A platform for scaling email marketing, SMS and automation.",
    },
  ];

  return (
    <Section id="communication">
      <Heading>
        Communication
        <span>Personalize how you engage with customers</span>
      </Heading>
      <SmallSection>
        {items.map((item) => {
          return <Card item={item} key={item.icon} />;
        })}
      </SmallSection>
    </Section>
  );
}
