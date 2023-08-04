"use client";
import React from "react";
import Wrapper from "./reusableComponent/wrapper";
import Carousel from "react-multi-carousel";
import { partners, testimonials } from "@/constants";
import { BsDisplay } from "react-icons/bs";

export default function Partners() {
  function timestampToMonthsAgo(timestam) {
    const timestamp = parseInt(timestam);
    const currentDate = new Date();
    const targetDate = new Date(timestamp);

    const diffInMilliseconds = currentDate - targetDate;
    const diffInMonths = diffInMilliseconds / (1000 * 60 * 60 * 24 * 30.44); // Approximate average month length

    const monthsAgo = Math.floor(diffInMonths);
    // console.log(monthsAgo);
    if (monthsAgo < 12) {
      if (monthsAgo === 0) {
        return "Few days ago";
      }
      if (monthsAgo === 1) {
        return "1 month ago";
      } else {
        return monthsAgo + " months ago";
      }
    } else {
      const diffInYears = Math.floor(diffInMonths / 12);

      if (diffInYears === 1) {
        return "1 year ago";
      } else {
        return diffInYears + " years ago";
      }
    }
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1900 },
      items: 2,
      partialVisibilityGutter: 280,
    },
    desktop: {
      breakpoint: { max: 1899, min: 1024 },
      items: 2,
      partialVisibilityGutter: 70,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <div className="style">
    <div className="bg-bg2 md:h-96 h-52 md:mb-0 mb-9">
    <Wrapper
  
    >
    

      <p className="text-4xl md:text-5xl text-left text-text_color2 gil-bold lg:pt-10 " style={{display:'flex', justifyContent:'center'}} >
        Our Partners
      </p>

      <div className=" row row-cols-2 md:grid-cols-5 lg:grid-cols-5  gap-2 md:gap-40 mt-2 md:mt-8 h-full "style={{display:'flex', justifyContent:'center'}} >
        {partners.map((partner, index) => (
          <div
            // className="relative flex justify-around items-center px-4 py-4 mx-16 bg grey-bg2 rounded-md hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer"
            // key={index}
          >
            {/* Add responsiveness to image on only this slide */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-all duration-700 ease-in-out rounded-md" ></div>
            

            <img
              src={partner.image}
              alt="ethereum"
              className="cursor-pointer h-[160px] w-[400px]  object-contain m-auto " style={{display:'flex', justifyContent:'center'}} 
            />
            {/* <h3 className="text-2xl gil-med text-gray-900">
                    {client.name}
                  </h3> */}
          </div>
        ))}
      </div>
    </Wrapper>
    </div>
    </div>
  );
  function testimonialCard({ text, image, name, position, when, key }) {
    return (
      <div
        key={key}
        className="bg-bg2 flex flex-col justify-between w-[80vw] min-h-[300px] max-h-[350px] md:max-h-[350px] md:min-h-[300px] md:w-[500px] gradient-05 rounded-2xl m-2 md:p-6 p-4 shadow-sm border border-bg1"
      >
        {/* <div className="flex flex-col h-full justify-between"> */}
        <p className="text-primary2 opacity-80 text-md  md:text-xl  lg:text-2xl text-justify text-ellipsis">
          "{text}"
        </p>

        <div className="flex flex-row w-full justify-between items-center ">
          <div className="flex flex-row mt-[10px]">
            <img
              src={image}
              alt=""
              className="w-[35px] h-[35px] md:w-[60px] md:h-[60px] object-cover rounded-full"
            />
            <div className="flex flex-col ml-1 md:ml-4">
              <p className="text-primary2 font-bold text-md md:text-xl lg:text-2xl">
                {name}
              </p>
              <p className="text-primary2 opacity-70 text-xs md:text-md lg:text-lg">
                {position}
              </p>
            </div>
          </div>
          <p className="text-primary2 opacity-50 text-[9px] md:text-xs">
            {timestampToMonthsAgo(when)}
          </p>
        </div>
        {/* </div> */}
      </div>
      
    );
  }
}
