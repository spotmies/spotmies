"use client";
import React, { useEffect, useState } from "react";
import HoverButton from "../reusableComponent/hoverButton";
import { AiOutlineEye, AiOutlineGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";
import worksJson from "../../json_files/work.json";
import Fade from "react-reveal/Fade";

const PortfolioSection = () => {
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    setFilterWork(worksJson.slice(0, 4));
  }, []);

  const showMore = () => {
    setFilterWork(worksJson);
  };

  return (
    <div className="w-[100vw] bg-white" id="portfolio">
      <section className="bg-white py-12 m-auto w-[90%] md:block hidden">
        <div className="container mx-auto w-full">
          <Fade bottom>
            <h2 className="text-5xl gil-bold text-text_color2 mb-8 ml-4">
              Our portfolio works
            </h2>
          </Fade>
          <Fade bottom>
            <p className="text-sm md:text-lg text-text_color2 opacity-60 text-justify ml-4 w-[60%]">
              Our expertise across various industries will help you to bridge
              the gaps with our innovative solutions
            </p>
          </Fade>
          <div className="flex flex-wrap">
            {filterWork.map((industry, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/2 p-6 flex flex-col"
              >
                <Fade bottom>
                  <div className="flex-2 bg-white overflow-hidden shadow-sm rounded-2xl hover:shadow-md relative industry-card">
                    <div className="absolute inset-0 bg-bg1 opacity-20 hover:opacity-90 opacity-layer2"></div>
                    <div className="absolute inset-0 w-full h-full p-6 flex flex-col">
                      <p className="text-white gil-med text-4xl onHoverShow">
                        {industry?.title}
                      </p>
                      <p className="opacity-70 text-white text-sm onHoverShow text-justify pt-4">
                        {industry.description}
                      </p>
                      <div className="flex flex-row items-center justify-between w-[30%] absolute bottom-[20px] right-[30px] onHoverShow">
                        <AiOutlineEye
                          size="2.5rem"
                          color="white"
                          className="cursor-pointer"
                        />
                        <AiOutlineGithub
                          size="2.1rem"
                          color="white"
                          className="cursor-pointer"
                        />
                        <MdOpenInNew
                          size="2rem"
                          color="white"
                          className="cursor-pointer"
                          onClick={() => {
                            if (industry?.completed) {
                              return window.open(
                                industry?.projectLink,
                                "_blank"
                              );
                            }
                            alert("Project is not completed yet");
                          }}
                        />
                      </div>
                    </div>

                    <a href="#">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-[350px] object-cover mypic "
                      />
                    </a>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
          {filterWork.length !== worksJson.length && (
            <div className="w-full flex flex-row items-center justify-center">
              <HoverButton
                text={"Show More"}
                onClick={showMore}
                className="rounded-xl"
              />
            </div>
          )}
        </div>
      </section>
      <section className="bg-white py-12 px-1 md:px-4 sm:px-8 lg:px-16 xl:px-32 md:hidden block">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-4xl sm:text-5xl gil-bold text-text_color2 mb-4 ml-4">
            Our portfolio works
          </h2>
          <p className="text-text_color2 text-sm opacity-60 text-justify mx-4 md:ml-0 md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas, quod, quia, voluptate quae voluptates quibusdam
            voluptatibus quos quas quidem quia voluptates quibusdam
          </p>
          <div className="flex flex-wrap mt-8">
            {filterWork.map((industry, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:p-6 flex flex-col"
                // whileTap={{ scale: 0.95 }}
              >
                <div className="flex-2 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md relative industry-card">
                  <div className="absolute inset-0 bg-bg1 opacity-20 hover:opacity-70 opacity-layer"></div>
                  <div className="absolute inset-0 w-full h-full p-6 flex flex-col">
                    <p className="text-white gil-med text-2xl sm:text-4xl onHoverShow">
                      {industry.title}
                    </p>
                    <p className="opacity-70 text-white text-xs onHoverShow text-justify">
                      {industry.description}
                    </p>
                    {/* <div className="flex flex-row items-center justify-between w-full absolute bottom-4 right-4"> */}
                    <div className="flex flex-row items-center justify-between w-[30%] absolute bottom-4 right-4 onHoverShow">
                      <AiOutlineEye
                        size="1.3rem"
                        color="white"
                        className="cursor-pointer"
                      />
                      <AiOutlineGithub
                        size="1.1rem"
                        color="white"
                        className="cursor-pointer"
                      />
                      <MdOpenInNew
                        size="1rem"
                        color="white"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>

                  <a href="#">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-52 md:h-60 object-cover mypic"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
          {filterWork.length !== worksJson.length && (
            <div className="w-full flex flex-row items-center justify-center">
              <HoverButton text={"Show More"} onClick={showMore} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;
