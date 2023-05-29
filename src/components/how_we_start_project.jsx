"use client";
import React from "react";
import {
  AiOutlineAntDesign,
  AiOutlineApi,
  AiOutlineAppstoreAdd,
  AiOutlineBgColors,
  AiOutlineBuild,
  AiOutlineFileSearch,
} from "react-icons/ai";
import { Fade } from "react-reveal";

export default function HowWeStart() {
  return (
    <div className="w-[100vw h-fit md:h-[50vh] lg:h-[40vh] bg-bg1 py-[5vh]">
      <div className="m-auto w-[90%] h-full flex flex-col">
        <Fade bottom>
          <p className="text-4xl md:text-6xl lg:text-8xl text-left text-text_color1 gil-bold">
            How we get into the <span className="text-primary">project</span>
          </p>
        </Fade>
        <br />
        <div className="flex flex-col md:flex-row items-center justify-between w-full lg:pt-[2%]">
          {blockComp(
            <AiOutlineFileSearch className="text-7xl lg:text-8xl text-text_color1 ml-[-8px] opacity-80" />,
            "Analyze",
            " We analyze your requirements and provide you with the best solution"
          )}

          {blockComp(
            <AiOutlineBuild className="text-7xl lg:text-8xl text-text_color1 ml-[-8px] opacity-80" />,
            "Design",
            "The product design is done by our team of experts to give you the best experience"
          )}

          {blockComp(
            <AiOutlineAppstoreAdd className="text-7xl lg:text-8xl text-text_color1 ml-[-8px] opacity-80" />,
            "Deliver",
            "We develop your product with the latest technologies to deliver you the outstanding performance"
          )}
        </div>
      </div>
    </div>
  );

  function blockComp(iconn, title, desc) {
    return (
      <>
        {" "}
        <div className="hidden w-[90%] md:w-[30%]  md:flex flex-row md:flex-col items-start justify-start">
          <Fade bottom>{iconn}</Fade>

          <Fade bottom>
            <p className="text-text_color1 text-2xl lg:text-4xl opacity-80">
              {title}
            </p>
          </Fade>
          <Fade bottom>
            <p className="text-text_color1 text-md lg:text-lg opacity-50 w-[70%]">
              {desc}
            </p>
          </Fade>
        </div>
        <div className="w-[95%] md:hidden my-2 flex flex-row items-start justify-between">
          <Fade bottom>{iconn}</Fade>
          <div className="flex flex-col w-[80%] pl-4 items-start justify-start">
            <Fade bottom>
              <p className="text-text_color1 text-2xl opacity-80">{title}</p>
            </Fade>
            <Fade bottom>
              <p className="text-text_color1 text-md opacity-50">{desc}</p>
            </Fade>
          </div>
        </div>
      </>
    );
  }
}
