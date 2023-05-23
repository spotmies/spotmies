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
  ];

  return (
    <div className="bg-bg1 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <Fade bottom>
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              Blockchains we build on
            </h2>
          </Fade>

          <Fade bottom>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text_color1 sm:text-4xl">
              Build with the Latest Technologies
            </p>
          </Fade>

          <Fade bottom>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We leverage the most innovative and cutting-edge technologies to
              deliver robust and scalable solutions.
            </p>
          </Fade>
        </div>

        <div className="mt-10">
          <Fade bottom>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {blockchains.map((blockchain, index) => (
                <div
                  className="relative flex justify-around items-center px-4 py-4 bg-bg2 rounded-md hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer"
                  key={index}
                >
                  <img
                    src={blockchain.icon}
                    alt="ethereum"
                    className="h-10 w-10  object-contain"
                  />
                  <h3 className="text-2xl gil-med text-gray-900">
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
