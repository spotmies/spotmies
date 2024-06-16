"use client";
import React from "react";

import { Fade } from "react-reveal";

export default function TechSlide() {
  const AITech = [
    {
      name: "Tenserflow",
      icon: "https://reaidystorage.blob.core.windows.net/spotmiespublic/tensor-flow.png",

    },
    {
      name: "PyTorch",
      icon: "https://reaidystorage.blob.core.windows.net/spotmiespublic/pytorch.png",
    },
    {
      name: "Keras",
      icon: "https://reaidystorage.blob.core.windows.net/spotmiespublic/keras.png",
    },
    {
      name: "Tableau",
      icon: "https://reaidystorage.blob.core.windows.net/spotmiespublic/tableau.png",
    },
    {
      name: "Lama",
      icon: "https://reaidystorage.blob.core.windows.net/spotmiespublic/lama.jpg",
    },
    {
      name: "Open AI",
      icon: "https://reaidystorage.blob.core.windows.net/spotmiespublic/open-AI.png",
    },
  ];

  return (
    <div className="bg-bg1 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-center">
          <Fade bottom>
            <h2 className="text-base lg:text-lg text-primary font-semibold tracking-wide uppercase">
              AI Solutions
            </h2>
          </Fade>

          <Fade bottom>
            <p className="mt-2 text-3xl lg:text-5xl leading-8 font-extrabold tracking-tight text-text_color1 sm:text-4xl">
              Powered by Cutting-Edge Technologies
            </p>
          </Fade>

          <Fade bottom>
            <p className="mt-4 max-w-2xl text-xl lg:text-2xl text-gray-500 lg:mx-auto mx-auto">
              At the forefront of innovation, we harness the latest advancements in artificial intelligence to develop powerful and scalable solutions tailored to your needs.
            </p>
          </Fade>
        </div>

        <div className="mt-10">
          <Fade bottom>
            <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-8">
              {AITech.map((Tech, index) => (
                <div
                  className="relative flex justify-around items-center px-5 py-4 bg-bg2 rounded-md hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer"
                  key={index}
                >
                  <img
                    src={Tech.icon}
                    alt="ethereum"
                    className="md:h-10 md:w-10 lg:h-14 lg:w-14 h-8 w-89  object-contain"
                  />
                  <h3 className="text-xl md:text-2xl lg:text-3xl gil-med text-gray-900">
                    {Tech.name}
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
