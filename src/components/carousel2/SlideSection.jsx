import styled from "styled-components";
import CaouselCard from "./CarouselCard";

const Slide = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export default function SlideSection({ items }) {
  return (
    <Slide>
      {items["items"].map((item) => {
        return <CaouselCard item={item} key={item.icon} />;
      })}
    </Slide>
  );
}
