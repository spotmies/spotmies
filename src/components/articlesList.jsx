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
      link: "https://www.linkedin.com/pulse/how-build-launch-dapp-from-scratch-spotmies/?trackingId=HTPLizTDSo%2BVzLDlUacobQ%3D%3D",
      image:
        "https://nftstorage.link/ipfs/bafkreie3mrcripfjm72rsiojodrzz57uqh5djotgp6ml7kuo627xsthozu",
    },
    {
      when: "13 Jan, 2023",
      // title about blockchain
      title: "Implementation of cryptography in Blockchain",
      description:
        "Imagine that data is like a puzzle. Each piece of data is like one small piece of the puzzle, and when all of the pieces are put together, they form a complete picture.",
      link: "https://www.linkedin.com/pulse/implementation-cryptography-blockchain-spotmies/?trackingId=9KOezgthoHknBzYblozLfQ%3D%3D",
      image:
        "https://nftstorage.link/ipfs/bafkreia52kcojujkpxuaowmhbtxkqd35q6uad5ilcnecdhvtgmj2s3beby",
    },
    {
      when: "15 Feb, 2023",
      // title about blockchain
      title: "Why data privacy 🔒 is more crucial now a day's.",
      description:
        "It is important to protect your privary because it can help keep you safe from identity theft, fraud, and other crimes. ",
      link: "https://www.linkedin.com/posts/spotmies_data-privacy-activity-7018892815887716353-HbTi?utm_source=share&utm_medium=member_desktop",
      image:
        "https://nftstorage.link/ipfs/bafkreigpwekmzrf7vbflzwfzprxajk5f5cweym53rw5un75p3lgqskb6ly",
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
              <p className="w-full md:w-[80%] pb-5 opacity-60 text-sm md:text-xl">
                Stay up-to-date with the latest trends and insights in your
                industry by following Spotmies's news and articles. We publish
                regular updates on topics ranging from technology and innovation
                to business strategy and marketing.
              </p>
            </Fade>
          </div>
          <Fade>
            <div className="flex flex-col md:flex-row w-full items-center justify-between">
              {article.map((item, index) => (
                <div
                  key={index}
                  className="text-primary2 bg-white flex flex-col items-start justify-between h-fit md:h-[450px] w-full md:w-[400px] rounded-2xl shadow-sm  p-3 md:m-0 m-2"
                >
                  <Fade>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[50%] w-full object-cover rounded-lg"
                    />
                  </Fade>
                  <div className="flex flex-col items-start justify-center pt-4 pl-2">
                    <div className="opacity-50">
                      <Fade bottom>
                        <p className="text-xs text-primary2 opacity-70">
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
                        <p className="opacity-70 text-sm text-primary2 text-ellipsis w-full overflow-hidden h-[40px]">
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
                        <p className="gil-bold text-sm text-primary">
                          KNOW MORE
                        </p>
                        <BsArrowUpRightCircleFill className="inline-block text-md ml-2 text-primary" />
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
