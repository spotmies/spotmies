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
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FLatest%2Fimg1.png?alt=media&token=edae52c2-027b-4b58-9709-b3f291793e5b",
    },
    {
      when: "13 Jan, 2023",
      // title about blockchain
      title: "Implementation of cryptography in Blockchain",
      description:
        "Imagine that data is like a puzzle. Each piece of data is like one small piece of the puzzle, and when all of the pieces are put together, they form a complete picture.",
      link: "https://www.linkedin.com/pulse/implementation-cryptography-blockchain-spotmies/?trackingId=9KOezgthoHknBzYblozLfQ%3D%3D",
      image:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FLatest%2Fimg2.png?alt=media&token=5cb61f72-0397-4c21-874f-fe00985fdb8d",
    },
    {
      when: "15 Feb, 2023",
      // title about blockchain
      title: "Why data privacy 🔒 is more crucial now a day's.",
      description:
        "It is important to protect your privary because it can help keep you safe from identity theft, fraud, and other crimes. ",
      link: "https://www.linkedin.com/posts/spotmies_data-privacy-activity-7018892815887716353-HbTi?utm_source=share&utm_medium=member_desktop",
      image:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FLatest%2Fimg3.png?alt=media&token=748d29fb-342b-40b1-bef5-d44570439cc7",
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
            <center className="mt-5"><a href='/blog' className="text-lg text-black py-2 hover:bg-black hover:text-white border border-black px-5 rounded-lg">View More</a></center>
      </div>
    </div>
  );
};

export default ArticlesList;
