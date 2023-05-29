"use client";
import React from "react";

import { Fade } from "react-reveal";

export default function TechSlide() {
  const blockchains = [
    {
      name: "Ethereum",
      icon: "https://user-images.githubusercontent.com/63062130/235427159-1b9af51a-03a1-41a6-b83e-06511ec4dd67.png",
    },
    {
      name: "Polygon",
      icon: "https://user-images.githubusercontent.com/63062130/235427169-5241ccf6-6bc2-4950-a22b-60400563c2a3.png",
    },
    {
      name: "Solana",
      icon: "https://user-images.githubusercontent.com/63062130/235427170-66e4237c-6a63-4c8a-aba4-845170c6fc99.png",
    },
    {
      name: "Near",
      icon: "https://user-images.githubusercontent.com/63062130/235427167-0ab2f870-d148-4b30-b654-bf3f24670868.png",
    },
    {
      name: "Hedera",
      icon: "https://user-images.githubusercontent.com/63062130/235427166-3ad659ac-bd2e-45f2-9248-4939c20f701c.png",
    },
    {
      name: "Biconomy",
      icon: "https://raw.githubusercontent.com/spotmies/images/43f94647a0c49df8fe085358c8c69101d6a4df53/biconomy.png",
    },
  ];

  return (
    <div className="bg-bg1 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-center">
          <Fade bottom>
            <h2 className="text-base lg:text-lg text-primary font-semibold tracking-wide uppercase">
              Blockchains we build on
            </h2>
          </Fade>

          <Fade bottom>
            <p className="mt-2 text-3xl lg:text-5xl leading-8 font-extrabold tracking-tight text-text_color1 sm:text-4xl">
              Build with the Latest Technologies
            </p>
          </Fade>

          <Fade bottom>
            <p className="mt-4 max-w-2xl text-xl lg:text-2xl text-gray-500 lg:mx-auto mx-auto">
              We leverage the most innovative and cutting-edge technologies to
              deliver robust and scalable solutions.
            </p>
          </Fade>
        </div>

        <div className="mt-10">
          <Fade bottom>
            <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-8">
              {blockchains.map((blockchain, index) => (
                <div
                  className="relative flex justify-around items-center px-5 py-4 bg-bg2 rounded-md hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer"
                  key={index}
                >
                  <img
                    src={blockchain.icon}
                    alt="ethereum"
                    className="md:h-10 md:w-10 lg:h-14 lg:w-14 h-8 w-89  object-contain"
                  />
                  <h3 className="text-xl md:text-2xl lg:text-3xl gil-med text-gray-900">
                    {blockchain.name}
                  </h3>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
