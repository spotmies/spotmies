"use client";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  BsArrowLeftCircle,
  BsArrowRightCircleFill,
  BsArrowUpRightCircle,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { Fade } from "react-reveal";
import Link from 'next/link';
// import FooterBar from "./footer";
// import articles from "@/pages/articles";
// import articles from "@/app/articles";
// import articles from "../app/articles";

const ArticlesList = () => {
  const article = [
    {
      when: "16 April, 2023",
      // title about blockchain
      title: "How to build & launch a DAPP from Scratch?",
      description:
        "Have you ever wondered, how cryptocurrency works and how the underline technology i.e. Blockchain works in a seemingly harmonious way so that we as users can use them without much difficulty? ",
      link: "/Articles/Article0",
      image:
        "https://raw.githubusercontent.com/spotmies/images/cc21efb2212e862f2b5acfe08e9d2fe9c671e566/t_09-.png",
    },
    {
      when: "13 Jan, 2023",
      // title about blockchain
      title: "Implementation of cryptography in Blockchain",
      description:
        "Imagine that data is like a puzzle. Each piece of data is like one small piece of the puzzle, and when all of the pieces are put together, they form a complete picture.",
      link: "/Articles/Article1",
      image:
        "https://raw.githubusercontent.com/spotmies/images/cc21efb2212e862f2b5acfe08e9d2fe9c671e566/t_10_.png",
    },
    {
      when: "15 Feb, 2023",
      // title about blockchain
      title: "Why data privacy 🔒 is more crucial now a day's.",
      description:
        "It is important to protect your privary because it can help keep you safe from identity theft, fraud, and other crimes. ",
      link: "/Articles/Article2",
      image:
        "https://raw.githubusercontent.com/spotmies/images/cc21efb2212e862f2b5acfe08e9d2fe9c671e566/t_11_.png",
    },
  ];

  return (
    <div className="min-h-[50vh] h-fit w-[100vw] bg-bg2" id="articles">
      <div className="py-10 w-full text-black gil-reg">
        <div className="w-[90%] m-auto">
          <div className="flex flex-row justify-between items-center w-full pb-8">
            <Fade bottom>
              <p className="gil-bold text-3xl md:text-5xl text-primary2">
                Follow the latest articles & news
              </p>
            </Fade>

            {/* <div className="flex flex-row items-center">
              <BsArrowLeftCircle className="inline-block text-3xl mr-2 text-primary2 cursor-pointer" />
              <BsArrowRightCircleFill className="inline-block text-3xl text-primary2 cursor-pointer" />
            </div> */}

<Link href="/article">
<button class="flex-shrink-0 text-white bg-black hover:bg-slate-500 border-0 py-2 px-8 focus:outline-none  rounded text-lg mt-10 sm:mt-0">Show more</button>
</Link>      
          </div>
          <div className="opacity-40">
            <Fade bottom>
              <p className="w-full md:w-[70%] pb-5 opacity-60 text-sm md:text-xl lg:text-2xl">
                Stay up-to-date with the latest trends and insights in your
                industry by following Spotmies's news and articles. We publish
                regular updates on topics ranging from technology and innovation
                to business strategy and marketing.
              </p>
            </Fade>
          </div>
          <Fade>
            <div className="flex flex-col md:flex-row w-full items-center justify-between ">
              {article.map((item, index) => (
                <div
                  key={index}
                  className="text-primary2 bg-white flex flex-col items-start justify-between md:justify-between lg:justify-around h-fit md:h-[450px] w-full md:w-[400px] lg:w-[500px] rounded-2xl shadow-sm  p-3 md:m-0 m-2"
                >
                  <Fade>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[65%] md:h-[45%] lg:h-[55%] w-full object-cover rounded-lg"
                    />
                  </Fade>
                  <div className="flex flex-col items-start justify-center pt-4 pl-2">
                    <div className="opacity-50">
                      <Fade bottom>
                        <p className="text-xs lg:text-sm text-primary2 opacity-70">
                          {item.when}
                        </p>
                      </Fade>
                    </div>
                    <Fade bottom>
                      <p className="text-2xl pb-2 pt-6 text-primary2 gil-med">
                        {item.title}
                      </p>
                    </Fade>
                    <div className="opacity-50">
                      <Fade bottom>
                        <p className="opacity-70 text-sm md:text-sm lg:text-lg text-primary2 text-ellipsis w-full overflow-hidden lg:overflow-visible h-[40px]">
                          {item.description}
                        </p>
                      </Fade>
                    </div>
                    <Fade bottom>
                      <div
                        className="flex flex-row items-center justify-start pt-6 pb-2 cursor-pointer"
                        onClick={() => {
                          if (!item.link) return;
                          window.open(item.link, "_blank");
                        }}
                      >
                        <p className="gil-bold text-sm lg:text-lg md:text-sm text-primary">
                          KNOW MORE
                        </p>
                        <BsArrowUpRightCircleFill className="inline-block text-md md:text-md lg:text-lg ml-2 text-primary" />
                      </div>
                    </Fade>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
</div>


    </div>
  );
};

export default ArticlesList;
