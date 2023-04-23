"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { clients } from "@/constants";

export default function ClientCarouselLogos() {
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 70,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 0,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive2}
        arrows={false}
        infinite={true}
        autoPlay={true}
      >
        {clients.map((testimonial, index) => (
          <div key={index}>
            <img
              src={testimonial.image}
              alt=""
              className="cursor-pointer h-[40px] w-[90px] md:h-[60px] md:w-[160px] grayscale hover:grayscale-0 object-contain m-auto hover:scale-110 transition-all duration-700 ease-in-out "
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}
