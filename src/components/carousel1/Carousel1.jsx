import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import styled from "styled-components";
import CarouselCard from "./CarouselCard";

const Div = styled.div`
  position: absolute;
  top: 15rem;
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 760px) {
    top: 20rem;
  }
`;

export default function Carousel1() {
  const items = [
    {
      title: "Leon & Goerge",
      text: "Premium house plants delivered direct to homes and offices across the US and Europe",
      image: "leon-and-george-slide.png",
    },
    {
      title: "Wholly Veggie",
      text: "Delicious plant based patties, pizzas, snacks and meals made to fit your daily routine",
      image: "wholly-veggie-slide.png",
    },
    {
      title: "Ira Concept",
      text: "Organic and biodegradable femenine products for Thailand",
      image: "ira-slide.png",
    },
    {
      title: "Reid & Reid",
      text: "Reid & Reid sell a selection of craft beverages direct to customers throuout newzeland",
      image: "reid-slide.png",
    },
    {
      title: "Blume",
      text: "Products that are good for your skin, body and the environment",
      image: "blume-slide.png",
    },
  ];

  return (
    <Div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={true}
        loop={true}
      >
        {items.map((item) => (
          <SwiperSlide key={item.title}>
            <CarouselCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Div>
  );
}
