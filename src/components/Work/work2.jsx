"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineFlutterDash, MdOutlineWeb, MdWeb } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import {
  SiFlutter,
  SiMongodb,
  SiSolidity,
  SiNextdotjs,
  SiDjango,
  SiPython,
  SiMysql,
  SiAmazonaws,
  SiIpfs,
  SiWeb3Dotjs,
  SiHyperledger,
  SiJavascript,
  SiStellar,
  SiTailwindcss,
  SiVercel,
  SiFigma,
  SiAdobexd,
  SiVitess,
  SiNodedotjs,
  SiFirebase,
  SiEthereum,
  SiPhp,
  SiGodaddy,
} from "react-icons/si";

import HoverButton from "../reusableComponent/hoverButton";
import {
  AiFillAndroid,
  AiOutlineAndroid,
  AiOutlineEye,
  AiOutlineGithub,
} from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";
import worksJson from "../../json_files/work.json";
import Fade from "react-reveal/Fade";
import { DynamicPopUp } from "../reusableComponent/dynamicPopUp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaAppStore,
  FaWindowMaximize,
} from "react-icons/fa";
import { FiMaximize2 } from "react-icons/fi";

const PortfolioSection = () => {
  const [filterWork, setFilterWork] = useState([]);
  const [showpopup, setShowpopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    setFilterWork(worksJson.slice(0, 4));
  }, []);

  const showMore = () => {
    setFilterWork(worksJson);
  };

  const redirectToRepository = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-[100vw] bg-white" id="portfolio">
      <DynamicPopUp show={showpopup} setShow={setShowpopup}
      >
        {/* <div
          className="absolute top-[-0px] md:right-[-0px] right-0 cursor-pointer"
          onClick={() => {
            setShowpopup(false);
          }}
        >
          <AiOutlineClose size="2rem" color="black" />
        </div> */}
        <ProjectDetails index={currentIndex} showMaximize={true} setShowpopup={setShowpopup} />
      </DynamicPopUp>
      <section className="bg-white py-12 m-auto w-[90%] md:block hidden">
        <div className="container mx-auto w-full">
          <Fade bottom>
            <h2 className="text-5xl lg:text-7xl gil-bold text-text_color2 mb-8 ml-4 ">
              Our portfolio works
            </h2>
          </Fade>
          <Fade bottom>
            <p className="text-sm md:text-lg lg:text-2xl text-text_color2 opacity-60 text-justify ml-4 w-[60%] p-2">
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
                  <div className="flex-2 h-[350px] overflow-hidden shadow-sm rounded-2xl hover:shadow-md relative industry-card bg-gray-300">
                    <div className="absolute inset-0 bg-bg1 opacity-20 hover:opacity-90 opacity-layer2"></div>
                    <div
                      className="absolute inset-0 w-full h-full p-6 flex flex-col cursor-pointer"
                      onClick={() => {
                        setCurrentIndex(index);
                        setShowpopup(true);
                      }}
                    >
                      <p className="text-white gil-med text-4xl onHoverShow">
                        {industry?.title}
                      </p>
                      <p className="opacity-70 text-white text-sm onHoverShow text-justify pt-4">
                        {industry.description}
                      </p>
                      <div className="flex flex-row items-center absolute bottom-[20px] right-[30px] onHoverShow">
                        {industry?.overview && (
                          <AiOutlineEye
                            size="2.5rem"
                            className="cursor-pointer hover:text-primary text-white"
                            onClick={() => {
                              setCurrentIndex(index);
                              setShowpopup(true);
                            }}
                          />
                        )}
                        {industry?.gitHub && (
                          <AiOutlineGithub
                            size="2.1rem"
                            className="cursor-pointer mr-6 hover:text-primary text-white"
                            onClick={() =>
                              redirectToRepository(industry.gitHub)
                            }
                          />
                        )}
                        {/* <MdOpenInNew
                          size="2rem"
                          className="cursor-pointer hover:text-primary text-white"
                          onClick={() => {
                            if (industry?.completed) {
                              return window.open(
                                industry?.projectLink,
                                "_blank"
                              );
                            }
                            alert("Project is not completed yet");
                          }}
                        /> */}
                      </div>
                    </div>

                    <a href="#">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover mypic "
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
            Our expertise across various industries will help you to bridge the
            gaps with our innovative solutions
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
                  <div
                    className="absolute inset-0 w-full h-full p-6 flex flex-col"
                    onClick={() => {
                      setCurrentIndex(index);
                      setShowpopup(true);
                    }}
                  >
                    <p className="text-white gil-med text-2xl sm:text-4xl onHoverShow">
                      {industry.title}
                    </p>
                    <p className="opacity-70 text-white text-xs onHoverShow text-justify">
                      {industry.description}
                    </p>
                    {/* <div className="flex flex-row items-center justify-between w-full absolute bottom-4 right-4"> */}
                    <div className="flex flex-row items-center justify-between w-fit absolute bottom-4 right-4 onHoverShow">
                      <AiOutlineEye
                        size="1.8rem"
                        color="white"
                        className="cursor-pointer"
                        onClick={() => {
                          setCurrentIndex(index);
                          setShowpopup(true);
                        }}
                      />
                      {/* <AiOutlineGithub
                        size="1.1rem"
                        color="white"
                        className="cursor-pointer"
                      /> */}
                      {/* <MdOpenInNew
                        size="1.4rem"
                        color="white"
                        className="cursor-pointer"
                        onClick={() => {
                          if (industry?.completed) {
                            return window.open(industry?.projectLink, "_blank");
                          }
                          alert("Project is not completed yet");
                        }}
                      /> */}
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
            <Fade bottom>
              <div className="w-full flex flex-row items-center justify-center">
                <HoverButton text={"Show More"} onClick={showMore} />
              </div>
            </Fade>
          )}
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;

export function ProjectDetails({ index, showMaximize, setShowpopup }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 80,
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

  const handleButtonClick = () => {
    const websiteURL = worksJson[index]?.overview?.links?.website;

    if (websiteURL) {
      window.open(websiteURL, '_blank');
    }
  };


  return (
    <div className="w-full">
      <div className="flex flex-row w-full items-center justify-between">
        <p className=" text-text_color2 text-2xl lg:text-4xl md:text-3xl gil-bold">
          {worksJson[index]?.title}
        </p>
        <div className="flex justify-between items-center gap-5 md:gap-10">
          {worksJson[index]?.overview?.links?.website && (<HoverButton text={"Visit"} onClick={handleButtonClick} className="rounded-xl" />)}

          {/* {showMaximize && (
            <FiMaximize2
              size="1.5rem"
              className="text-[#1D1D1D] hover:text-primary cursor-pointer hover:scale-110 transition-all duration-700 ease-in-out"
              onClick={() => {
                window.open(`/projects/${worksJson[index]?.projectName}`, "_self");
              }}
            />
          )} */}
          <div
            className="absolute right-5 top-3 bg-white rounded-full p-2 text-[#1D1D1D] hover:text-primary cursor-pointer hover:scale-110 transition-all duration-700 ease-in-out"
            onClick={() => setShowpopup(false)}
          >
            <AiOutlineClose size="1.5rem" />
          </div>
        </div>
      </div>

      {/* Image section */}

      <div>
        <Carousel
          responsive={responsive}
          // partialVisible={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          {worksJson[index]?.overview?.images?.map((item, key) => (
            <div
              key={key}
              className="w-full h-[300px] lg:h-[600px] md:h-[600px] p-4 rounded-md"
            >
              <img
                src={item}
                className="w-full h-full object-cover rounded-md"
                alt="portfolio"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Content section */}

      {worksJson[index]?.overview?.content?.map((item, key) => (
        <div key={key} className="w-full pt-5">
          {item?.title && (
            <p className="text-text_color2 text-2xl gil-bold">{item.title}</p>
          )}
          {item?.description && (
            <p className="text-text_color2 text-lg opacity-60">
              {item.description}
            </p>
          )}
          {item?.image && (
            <div className="w-full py-4 rounded-md ">
              <img
                src={item.image}
                className="w-full object-cover rounded-md min-h-[200px] bg-slate-300"
                alt="portfolio"
              />
            </div>
          )}
        </div>
      ))}

      {/* Technology section */}

      <p className="text-text_color2 text-xl gil-bold">Tech Stack Used:</p>
      <div className="flex justify-between">
        <div className="w-full flex flex-wrap pt-5">
          {worksJson[index]?.overview?.techstack?.map((item, key) => (
            <div key={key} className="mr-5">
              {item == "flutter" && <SiFlutter color="#02569B" size="3rem" />}
              {item == "reactjs" && <FaReact color="#61DBFB" size="3rem" />}
              {item == "mongodb" && <SiMongodb color="#47A248" size="3rem" />}
              {item == "solidity" && <SiSolidity color="#363636" size="3rem" />}
              {item == "nextjs" && <SiNextdotjs color="#000000" size="3rem" />}
              {item == "django" && <SiDjango color="#092E20" size="3rem" />}
              {item == "python" && <SiPython color="#3776AB" size="3rem" />}
              {item == "mysql" && <SiMysql color="#4479A1" size="3rem" />}
              {item == "aws" && <SiAmazonaws color="#FF9900" size="3rem" />}
              {item == "ipfs" && <SiIpfs color="#65C2CB" size="3rem" />}
              {item == "web3" && <SiWeb3Dotjs color="#F16822" size="3rem" />}
              {item == "ethereum" && <SiEthereum color="#3C3C3D" size="3rem" />}
              {item == "hyperledger" && (
                <SiHyperledger color="#2F3134" size="3rem" />
              )}
              {item == "javascript" && (
                <SiJavascript color="#F7DF1E" size="3rem" />
              )}
              {item == "stellar" && <SiStellar color="#08B5E5" size="3rem" />}
              {item == "tailwind" && (
                <SiTailwindcss color="#38B2AC" size="3rem" />
              )}
              {item == "html" && <FaHtml5 color="#E34F26" size="3rem" />}
              {item == "css" && <FaCss3 color="#1572B6" size="3rem" />}
              {item == "vercel" && <SiVercel color="#000000" size="3rem" />}
              {item == "figma" && <SiFigma color="#F24E1E" size="3rem" />}
              {item == "adobexd" && <SiAdobexd color="#FF26BE" size="3rem" />}
              {item == "vite" && <SiVitess color="#646CFF" size="3rem" />}
              {item == "nodejs" && <SiNodedotjs color="#339933" size="3rem" />}
              {item == "firebase" && <SiFirebase color="#FFCA28" size="3rem" />}
              {item == "php" && <SiPhp color="#777BB4" size="3rem" />}
              {item == "godaddy" && <SiGodaddy color="#7DB701" size="3rem" />}
              {item == "biconomy" &&
                imageIcon(
                  "https://raw.githubusercontent.com/spotmies/images/43f94647a0c49df8fe085358c8c69101d6a4df53/biconomy.png"
                )}

              {item == "polygon" &&
                imageIcon(
                  "https://user-images.githubusercontent.com/63062130/235427169-5241ccf6-6bc2-4950-a22b-60400563c2a3.png"
                )}

              {item == "metamask" &&
                imageIcon(
                  "https://github.com/spotmies/images/assets/63062130/897969e1-0c2e-43a6-b836-a47f62b4c9c0"
                )}
            </div>
          ))}
        </div>
        <div>
          {worksJson[index]?.overview?.links?.website && (
            <HoverButton text={"Visit Application"} onClick={handleButtonClick} className="rounded-xl" />
          )}
        </div>
      </div>


      {/* project links */}

      {/* <div className="mt-5 w-full">
        <p className="text-text_color2 text-xl gil-bold">
          Check out the project
        </p>
        <div className="w-full flex flex-row pt-5">
          {worksJson[index]?.overview?.links?.website && (
            <MdWeb
              size="2rem"
              className="cursor-pointer text-gray-600 hover:text-primary mr-5"
              onClick={() =>
                redirectToRepository(worksJson[index]?.overview?.links?.website)
              }
            />
          )}
          {worksJson[index]?.overview?.links?.android && (
            <AiFillAndroid
              size="2rem"
              className="cursor-pointer text-gray-600 hover:text-green-500 mr-5"
              onClick={() =>
                redirectToRepository(worksJson[index]?.overview?.links?.android)
              }
            />
          )}
          {worksJson[index]?.overview?.links?.ios && (
            <FaAppStore
              size="2rem"
              className="cursor-pointer text-gray-600 hover:text-blue-500 mr-5"
              onClick={() =>
                redirectToRepository(worksJson[index]?.overview?.links?.ios)
              }
            />
          )}
        </div>
      </div> */}
    </div>
  );

  function imageIcon(url) {
    return <img src={url} width="50px" height="50px" />;
  }
}
