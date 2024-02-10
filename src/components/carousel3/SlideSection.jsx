import styled from "styled-components";
import CarouselCard from "./CarouselCard";

const Slide = styled.div`
  display: inline-flex;
  gap: 4rem;
  align-items: flex-start;
  justify-content: space-between;
`;

export default function SlideSection({ items }) {
  return (
    <Slide>
      {items["items"].map((item) => {
        return <CarouselCard item={item} key={item.icon} />;
      })}
    </Slide>
  );
}
