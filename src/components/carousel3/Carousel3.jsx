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
    width: 80%;
  }
`;

export default function Carousel3copy() {
  const items = [
    {
      icon: "avatar1.svg",
      name: "Christian Symore",
      company: "developer & designer",
      text: "I started playing with commerce.js and I've got to say I am pleasently surpirsed with how easy it is to work with. It's so simple to get what you need and display it. I think it might be my go-to replacing the WooCommerce and Shopify.",
    },
    {
      icon: "avatar2.svg",
      name: "Romain Allemann",
      company: "Interaction designer",
      text: "I love developing with commerce.js, It allows me to focus on creating a great experience for the customer, without having to structure my whole app around a CMS.",
    },
    {
      icon: "avatar3.svg",
      name: "Nicola Boltan",
      company: "developer & designer",
      text: "As a designer turned front end developer, Commerce.js gives me control when developing custome eCommerce stores. Quick and easy to setup, I can focus on creating better experience for the customer, rather than getting stuck in a complex eCommerce platform.",
    },
    {
      icon: "avatar4.svg",
      name: "Chris Vibart",
      company: "Cto of ira concept",
      text: "As a developer Commerce.js APIs are just right for building a modern eCommerce store. They're easy to use and they take care of all eCommerce complexities whilist not getting in the way of how you build your actual website.",
    },
    {
      icon: "avatar5.svg",
      name: "Fernando Medoza",
      company: "developer",
      text: "There's no reason to build your eCommerce infrastructure from scratch. Commerce.js has helped to get to market faster by offering a clean abstraction where i dont need to worry about calculating order tools,discounts, and shipping costs. All are provided out of the box.",
    },
    {
      icon: "avatar6.svg",
      name: "Ron Radu",
      company: "co founder of leon & goerge",
      text: "We're doing powerful integrations with Commerce.js that we wouldn't be able to do using something like Shopify. It's been effortless to work with and we're doing alot with still a relatively small team.",
    },
  ];

  return (
    <Div>
      <Swiper
        className="swiper-wrapper2"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={80}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 3,
          },
        }}
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
