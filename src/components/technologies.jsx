"use client";
import React from "react";

import { Fade } from "react-reveal";

export default function TechSlide() {
  const blockchains = [
    {
      name: "Ethereum",
      icon: "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSixthFolder%2Flogo1.png?alt=media&token=4812baf6-6e2a-4ebb-80c1-5ad2e252b214",
    },
    {
      name: "Polygon",
      icon: "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSixthFolder%2Flogo2.png?alt=media&token=b0480974-afb5-4945-b578-503fd34eca96",
    },
    {
      name: "Solana",
      icon: "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSixthFolder%2Flogo3.png?alt=media&token=12a14738-7671-47eb-9b36-b7f3dc7c69ca",
    },
    {
      name: "Near",
      icon: "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSixthFolder%2Flogo4.png?alt=media&token=93778dd2-b9f3-4ec1-ae38-3c273bb987ae",
    },
    {
      name: "Hedera",
      icon: "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSixthFolder%2Flogo5.png?alt=media&token=8e9b7ab9-58fa-4f18-8976-0d15196909f8",
    },
    {
      name: "Biconomy",
      icon: "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSixthFolder%2Flogo6.png?alt=media&token=34575ed5-3831-4e25-9e45-3c61ba86d26a",
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
