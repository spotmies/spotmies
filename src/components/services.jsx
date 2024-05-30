"use client";
import {
  productDesign,
  Datascience,
  blockchainDevelopment,
  AI,
  SAAS,
} from "@/constants";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Fade from "react-reveal/Fade";

export default function Services() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [body, setbody] = useState(productDesign);
  return (
    <div className="w-[100vw] h-fit md:h-[100vh] bg-bg2" id="services">
      {/* {PopUp(title, body, show, setIsPopupOpen)} */}
      <PopUp
        title={title}
        body={body}
        show={isPopupOpen}
        setShow={setIsPopupOpen}
      />
      <div className="flex flex-col justify-center w-[90%] h-full py-[8%] m-auto">
        <Fade bottom>
          <p className="gil-bold text-3xl md:text-5xl text-left pb-12 text-text_color2">
            What We Offer
          </p>
        </Fade>
        <div className="w-full h-full m-auto flex flex-col md:flex-row items-center justify-center ">
          <div className="flex flex-col items-center justify-center h-full w-full md:w-[70%]">
            <Fade>
              <div className=" w-full h-[60%] bg-red-300 rounded-xl mb-2 md:mb-6 relative industry-card">
                {dataInsideDiv({
                  onClick: () => {
                    setIsPopupOpen(true);
                    setTitle("AI & ML");
                    setbody(AI);
                  },
                  title: "AI & ML",
                  description:
                    "Realize your vision with our expert AI & ML product design services.",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSecondFolder%2FSecond1.avif?alt=media&token=23147974-49ad-4a89-a13a-eaffa8be8152",
                })}
              </div>
            </Fade>

            <div className="w-full h-[40%] mb-2 md:mb-0 flex flex-row items-center justify-center">
              <Fade>
                <div className="flex flex-col items-center justify-center w-[50%] h-full bg-blue-100 rounded-xl mr-2 md:mr-6 industry-card relative">
                  {dataInsideDiv({
                    onClick: () => {
                      setIsPopupOpen(true);
                      setTitle("Datascience and Neural Networks");
                      setbody(Datascience);
                    },
                    title: "Datascience and Neural Networks",
                    description:
                      "Experience the future with our advanced neural network solutions.",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSecondFolder%2FSecond3.avif?alt=media&token=a668618e-05b4-4931-b71d-f5a4e029421b",
                  })}
                </div>
              </Fade>
              <Fade>
                <div className="flex flex-col items-center justify-center w-[50%] h-full bg-green-100 rounded-xl industry-card relative">
                  {dataInsideDiv({
                    onClick: () => {
                      setIsPopupOpen(true);
                      setTitle("SaaS");
                      setbody(SAAS);
                    },
                    title: "SaaS",
                    description:
                      "Elevate your business with our cutting-edge SaaS solutions for seamless scalability and efficiency.",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSecondFolder%2FSecond4.avif?alt=media&token=a3199497-b42f-4413-b2f9-dab2ba9e0dcb",
                  })}
                </div>
              </Fade>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full ml-0 md:ml-6 w-full md:w-[30%]">
            {/* this div contains 2 div, 1st one is 40% 2nd one is 60% heights respectively */}
            <Fade>
              <div className="flex flex-col items-center justify-center w-full h-[40%] bg-yellow-100 rounded-xl mb-2 md:mb-6 industry-card relative">
                {dataInsideDiv({
                  onClick: () => {
                    setIsPopupOpen(true);
                    setTitle("Blockchain & Web3");
                    setbody(blockchainDevelopment);
                  },
                  //this is changed
                  title: "Blockchain & Web3",
                  description:
                    "Empower your business with the transformative potential of blockchain technology",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSecondFolder%2FSecond2.avif?alt=media&token=37d68459-0b1f-4f4e-be16-52c2745f98c4",
                })}
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col items-center justify-center w-full h-[60%] bg-pink-100 rounded-xl industry-card relative">
                {dataInsideDiv({
                  onClick: () => {
                    setIsPopupOpen(true);
                    setTitle("Product Design");
                    setbody(productDesign);
                  },
                  title: "Product Design",
                  description:
                    "Transform your ideas into reality with our expert product design services",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSecondFolder%2FSecond5.png?alt=media&token=78fc21e6-958f-4303-a5ab-168285a4b883",
                })}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );

  function dataInsideDiv({ title, description, image, onClick }) {
    return (
      <>
        <div className="absolute inset-0 bg-black opacity-20 hover:opacity-40 opacity-layer rounded-md md:rounded-xl" />
        <div className="absolute inset-0 w-full h-full p-3 md:p-6 lg:p-10 flex flex-col">
          <Fade bottom>
            <p className="text-white gil-bold text-md md:text-3xl lg:text-4xl">
              {title}
            </p>
          </Fade>
          <p className="text-white text-xs md:text-lg lg:text-2xl onHoverShow text-justify pt-0 lg:pt-6 md:pt-4">
            {description}
          </p>
          <BsArrowRight
            onClick={() => {
              onClick && onClick();
            }}
            size=""
            color="white"
            className="absolute bottom-[20px] md:text-[2rem] right-[30px]  onHoverShow cursor-pointer"
          />
        </div>
        <img
          src={image}
          alt="pic"
          className="w-full h-full object-cover rounded-md md:rounded-xl "
        />
      </>
    );
  }
}
export function PopUp({ title, body, show, setShow }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div
        // key={key}
        className="rounded-xl bg-white z-50 shadow-sm p-9 hover:shadow-lg transition duration-300 w-[90vw] md:w-[70vw] h-[80vh] md:min-h-fit md:h-[80vh] min-h-[300px] flex flex-col justify-between relative md:overflow-y-auto overflow-y-auto"
      >
        <h2 className="text-3xl gil-bold text-primary2">{title}</h2>
        {body.map((item, key) => (
          <>
            <p className="text-gray-600 pt-4 text-md md:text-xl" key={key}>
              {item.description}
              <br />
            </p>
          </>
        ))}
        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => {
            setShow(false);
          }}
        >
          <AiOutlineCloseCircle size="2rem" color="black" />
        </div>
      </div>
    </div>
  );
}
