import styled from "styled-components";
import VerticalSection from "../../ui/VerticalSection";
import SectionHeading from "../../ui/SectionHeading";
import Card from "./Card";

const CardSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 3rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export default function Section3() {
  const items = [
    {
      title: "JavaScript",
      text: "Handles all dynamic functionality in your application. Choose any JavaScript framework or library to build with.",
      button: { text: "JAVASCRIPT FRAMEWORKS", to: "/frameworks" },
    },
    {
      title: "APIs",
      text: "Server side operations are consumed via APIs over HTTPS with JS. Use 3rd party services or custom functions.",
      button: { text: "COMMERCE APIS", to: "/commerce-api" },
    },
    {
      title: "Markup",
      text: "Websites are served as static HTML files. Generate from source files, such as Markdown, or use a Static Site Generator.",
    },
  ];

  return (
    <VerticalSection>
      <SectionHeading type="white">
        Serverless commerce development
      </SectionHeading>
      <CardSection>
        {items.map((item) => {
          return <Card key={item.title} item={item} />;
        })}
      </CardSection>
    </VerticalSection>
  );
}
