import styled from "styled-components";
import Card from "./Card.jsx";

const CardSection = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;
`;

export default function CardSection1() {
  const items = [
    {
      icon: "react-icon-white",
      title: "React.js",
      text: "A powerful framework, developed at Facebook to anticipate high traffic. Now an open-source framework, React offers outstanding functionality.",
    },
    {
      icon: "vue-icon-white",
      title: "Vue.js",
      text: "Vue is easy to use and is a great way to start a component framework. It also offers a huge doc library, a growing exosystem, and helpful default settings.",
    },
    {
      icon: "nextjs-icon-white",
      title: "Next.js",
      text: "Next.js is a free open source framework based on React and Node.js. Ideal for commerce applications as it is supports both SSR and SSG.",
    },
    {
      icon: "gatsby-icon-white",
      title: "Gatsby",
      text: "A React based, open source framework that uses GraphQL. With performance, scalabiity and security built-in, Gatsby is a powerful for commerce projects.",
    },
    {
      icon: "nuxt-icon-white",
      title: "Nuxt.js",
      text: "Nuxt.js is a free and open source framework based on Vue.js and Node.js. With high performant indexing features, Nuxt is suited for commerce applications.",
    },
    {
      icon: "svelte-icon-white",
      title: "Svelte",
      text: "Svelte is a relative new framework that write the code to update the document object model in synchonization with the state of the application.",
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
