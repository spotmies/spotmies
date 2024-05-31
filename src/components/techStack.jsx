"use client";
import React from "react";
import Wrapper from "./reusableComponent/wrapper";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiFlutter,
  SiMongodb,
  SiSolidity,
  SiNextdotjs,
  SiDjango,
  SiPython,
  SiMysql,
  SiAmazonaws,
  SiWeb3Dotjs,
  SiJavascript,
  SiMicrosoftazure,
  SiGooglecloud,
  SiLooker,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiTableau,
  SiPowerbi,
  SiDevpost,
  SiInfiniti,
  SiAzuredevops,
} from "react-icons/si";
import { Fade } from "react-reveal";
export default function TechStack() {
  // add truffle,Ganache
  const technologies = [
    {
      icon: <SiTensorflow color="#3680f7" />,
      name: "Tenserflow",
    },
    {
      icon: <SiPytorch color="#3680f7" />,
      name: "PyTorch",
    },
    {
      icon: <SiKeras color="#3680f7" />,
      name: "Keras",
    },
    {
      icon: <SiTableau color="#3680f7" />,
      name: "Tableau",
    },
    {
      icon: <SiPowerbi color="#3680f7" />,
      name: "Power BI",
    },
    {
      icon: <SiAzuredevops color="#3680f7" />,
      name: "DevOps",
    },
    {
      icon: <FaReact color="#61DBFB" />,
      name: "React",
    },
    {
      icon: <FaNodeJs color="#3C873A" />,
      name: "Node JS",
    },
    {
      icon: <SiFlutter color="#02569B" />,
      name: "Flutter",
    },
    {
      icon: <SiMongodb color="#4DB33D" />,
      name: "MongoDB",
    },
    {
      icon: <SiSolidity color="#363636" />,
      name: "Solidity",
    },
    {
      icon: <SiNextdotjs color="#000000" />,
      name: "Next JS",
    },
    {
      icon: <SiDjango color="#092E20" />,
      name: "Django",
    },
    {
      icon: <SiPython color="#3776AB" />,
      name: "Python",
    },
    {
      icon: <SiMysql color="#4479A1" />,
      name: "MySQL",
    },
    {
      icon: <SiAmazonaws color="#232F3E" />,
      name: "AWS",
    },
    {
      icon: <SiWeb3Dotjs color="#F16822" />,
      name: "Web3 JS",
    },
    {
      icon: <SiJavascript color="#F7DF1E" />,
      name: "Javascript",
    },
    {
      icon: <SiMicrosoftazure color="#08B5E5" />,
      name: "Azure",
    },
    {
      icon: <SiGooglecloud color="#3680f7" />,
      name: "GCP",
    },
    {
      icon: <SiLooker color="#3680f7" />,
      name: "LookerStudio",
    }

  ];

  return (
    <Wrapper
      title={"Techstack we're working with"}
      className="bg-bg3 min-h-fit"
    >
      <div className="mt-5 px-0 md:px-5">
        <Fade bottom>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 md:gap-16">
            {technologies.map((tech, index) => (
              <div
                className="relative flex items-center rounded-md hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer opacity-100 hover:opacity-100 md:grayscale lg:grayscale hover:grayscale-0"
                key={index}
              >
                <div className={`text-3xl md:text-4xl text-black`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl md:text-3xl ml-4 gil-med text-gray-900">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </Wrapper>
  );
}
