"use client";
import React from "react";
import Wrapper from "./reusableComponent/wrapper";
import HoverButton from "./reusableComponent/hoverButton";
import {
  AiOutlineAppstoreAdd,
  AiOutlineArrowRight,
  AiOutlineAudit,
  AiOutlineCodeSandbox,
  AiOutlineDollar,
  AiOutlineFileImage,
  AiOutlineMobile,
  AiOutlineStar,
  AiOutlineWallet,
} from "react-icons/ai";
import { FaFileContract } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import { MdOutlinePayment } from "react-icons/md";
import { Fade } from "react-reveal";
export default function BlockchainService() {
  const blockchainServices = [
    {
      title: "DApp Development",
      icon: (
        <AiOutlineCodeSandbox
          size="5rem"
          className="text-primary ml-[-10px] icon"
        />
      ),
      description:
        "DApp is a decentralized application built on a blockchain network that provides transparency, security, and reliability to end-users. By integrating DApp into your website, you can offer your users a secure and decentralized environment to interact with your services and products.",
    },
    {
      title: "NFT Marketplace",
      icon: (
        <AiOutlineFileImage
          size="5rem"
          className="text-primary ml-[-10px] icon"
        />
      ),
      description:
        "NFT marketplace on your website enables buying, selling and trading unique digital assets that are verified on the blockchain, creating scarcity, and value for collectors and creators.",
    },
    {
      title: "Smart Contract",
      icon: (
        <FaFileContract size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "Smart contracts enable automated, secure and transparent execution of agreements on the blockchain, reducing the need for intermediaries and increasing efficiency and trust in transactions.",
    },
    {
      title: "DEFI Development",
      icon: (
        <AiOutlineDollar size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "DeFi is a blockchain-based financial system that enables users to access financial services such as borrowing, lending, and trading without intermediaries. It provides transparent, secure, and decentralized financial solutions.",
    },
    {
      title: "Smart Contract Audit",
      icon: (
        <AiOutlineAudit size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "Smart contract auditing ensures the code is secure, optimized and efficient to minimize risks of potential vulnerabilities, bugs and hacks. It's a critical step to build trust and confidence in blockchain applications.",
    },
    {
      title: "Web3 Wallet",
      icon: (
        <AiOutlineWallet size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "We3 Wallet Integration allows users to securely store and manage their digital assets in one place, with added security features like multi-factor authentication and biometric verification. It simplifies transactions and allows users to easily access their crypto assets from anywhere.",
    },
    {
      title: "Gasless Transaction",
      icon: (
        <MdOutlinePayment
          size="5rem"
          className="text-primary ml-[-10px] icon"
        />
      ),
      description:
        "Gasless Transaction allows users to transact on the blockchain without paying gas fees by having a third-party cover the transaction cost, increasing accessibility and ease of use for blockchain applications.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1900 },
      items: 2,
      partialVisibilityGutter: 70,
    },
    desktop: {
      breakpoint: { max: 1899, min: 1024 },
      items: 2,
      partialVisibilityGutter: 10,
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

  return (
    <Wrapper
      title="Revolutionize Your Experience with Web 3.0"
      className="bg-bg2 min-h-fit"
      titleClassName="lg:text-7xl"
    >
      <Fade bottom>
      <div className="flex flex-col-reverse md:flex-row w-full justify-between items-start min-h-[20vh] py-[2vh]">
        <div className="flex flex-col w-[90%] md:w-[35%] text-text_color2 mt-4 md:mt-0">
          <p className="text-xl lg:text-xl text-justify opacity-60">
            Web 3.0 services are necessary to meet the demands of a
            decentralized and trustless digital landscape. By leveraging
            blockchain technology, our services provide secure and transparent
            solutions that empower businesses and individuals. From NFT
            marketplaces to smart contract auditing and gasless transactions,
            our services offer seamless integration and enhance the overall user
            experience
          </p>
          
          <HoverButton
            text={"Contact Us"}
            className="mt-4 w-fit rounded-md"
            icon={<AiOutlineArrowRight />}
            onClick={() =>{
              // navigate to contact page /#contact

              window.document
              .getElementById("contactUs")
              .scrollIntoView({ behavior: "smooth" });
          



            }}
          />
        </div>
        
        <div className="md:w-[60%] w-[100%] ">
          <Carousel responsive={responsive} partialVisible={true}>
            {blockchainServices.map((service, index) => (
              <div key={index}>
                {card(service.title, service.icon, service.description)}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      </Fade>

    </Wrapper>
  );

  function card(title, icon, description) {
    return (
      <div className="hover-card text-bg1 w-[90vw] h-[330px] md:w-[350px] md:h-[330px] lg:w-[350px] lg:h-[330px] rounded-2xl border-opacity-30 border cursor-pointer border-bg1 bg-bg2 hover:bg-bg1 transition-all  duration-700 ease-in-out p-6 flex flex-col items-start">
        {icon}
        <p className="text-2xl lg:text-3xl gil-bold mt-4 hover-card-text">
          {title}
        </p>
        <p className="text-sm lg:text-lg mt-4 hover-card-text opacity-50">
          {description}
        </p>
      </div>
    );
  }
}
