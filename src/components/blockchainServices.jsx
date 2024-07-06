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
  AiOutlineCloud,
  AiFillHdd,
  AiOutlineCluster,
} from "react-icons/ai";
import { FaFileContract, FaJoomla, } from "react-icons/fa";
import { SiWeb3Dotjs, SiSmartthings, SiOracle, SiAmazonec2, SiGitter, SiDocsdotrs, SiOpenapiinitiative, SiMultisim } from "react-icons/si";
import Carousel from "react-multi-carousel";
import { MdOutlinePayment, MdOutlineSecurity, MdOutlineTransform, MdDiversity3, } from "react-icons/md";
import { Fade } from "react-reveal";
import { IoMdAnalytics, } from "react-icons/io";
import { TbArrowAutofitContentFilled, } from "react-icons/tb";
export default function BlockchainService() {
  const blockchainServices = [

    // {
    //   title: "Smart Contract",
    //   icon: (
    //     <FaFileContract size="5rem" className="text-primary ml-[-10px] icon" />
    //   ),
    //   description:
    //     "Smart contracts enable automated, secure and transparent execution of agreements on the blockchain, reducing the need for intermediaries and increasing efficiency and trust in transactions.",
    // },
    // {
    //   title: "DEFI Development",
    //   icon: (
    //     <AiOutlineDollar size="5rem" className="text-primary ml-[-10px] icon" />
    //   ),
    //   description:
    //     "DeFi is a blockchain-based financial system that enables users to access financial services such as borrowing, lending, and trading without intermediaries. It provides transparent, secure, and decentralized financial solutions.",
    // },
    // {
    //   title: "Smart Contract Audit",
    //   icon: (
    //     <AiOutlineAudit size="5rem" className="text-primary ml-[-10px] icon" />
    //   ),
    //   description:
    //     "Smart contract auditing ensures the code is secure, optimized and efficient to minimize risks of potential vulnerabilities, bugs and hacks. It's a critical step to build trust and confidence in blockchain applications.",
    // },
    // {
    //   title: "Web3 Wallet",
    //   icon: (
    //     <AiOutlineWallet size="5rem" className="text-primary ml-[-10px] icon" />
    //   ),
    //   description:
    //     "We3 Wallet Integration allows users to securely store and manage their digital assets in one place, with added security features like multi-factor authentication and biometric verification. It simplifies transactions and allows users to easily access their crypto assets from anywhere.",
    // },
    // {
    //   title: "Gasless Transaction",
    //   icon: (
    //     <MdOutlinePayment
    //       size="5rem"
    //       className="text-primary ml-[-10px] icon"
    //     />
    //   ),
    //   description:
    //     "Gasless Transaction allows users to transact on the blockchain without paying gas fees by having a third-party cover the transaction cost, increasing accessibility and ease of use for blockchain applications.",
    // },
    {
      title: "Application Development",
      icon: (
        <FaFileContract size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "Application development is creating software for devices like computers and smartphones. It includes designing, programming, and testing to produce user-friendly applications. The goal is to meet specific needs and functionalities.",
    },
    {
      title: "ML Model",
      icon: (
        <FaJoomla size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "Machine Learning models are computational algorithms that learn patterns from data, enabling predictions and decision-making. They adapt and improve accuracy with experience, finding applications across diverse industries, from healthcare to finance.",
    },
    {
      title: "IoT",
      icon: (
        <SiSmartthings size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "IoT connects devices to the internet, enabling data exchange for improved automation in various sectors like smart homes and industry. It transforms our surroundings into a more connected and efficient ecosystem.",
    },
    {
      title: "Cyber Security",
      icon: (
        <MdOutlineSecurity size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "Cybersecurity is the practice of protecting computer systems, networks, and data from digital threats and unauthorized access. It involves implementing measures to safeguard information, prevent cyber attacks, and ensure the confidentiality and integrity of sensitive data.",
    },
    {
      title: "Cloud",
      icon: (
        <AiOutlineCloud size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "Cloud computing involves accessing and storing data, as well as running applications over the internet instead of on physical hardware. It provides scalable and on-demand computing resources, offering flexibility and efficiency for businesses and individuals.",
    },
    {
      title: "Web3",
      icon: (
        <SiWeb3Dotjs size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "Web3 signifies the decentralized future of the internet, leveraging technologies such as blockchain to enhance transparency and empower users in online interactions, reducing reliance on traditional intermediaries.",
    },
    {
      title: "Oracle EBS Services",
      icon: (
        <SiOracle size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "Oracle E-Business Suite (EBS) offers a versatile range of integrated services, from finance and supply chain management to human resources, providing organizations with a unified platform to enhance operational efficiency and streamline business functions.",
    },
    {
      title: "Oracle DB Consulting Services",
      icon: (
        <AiFillHdd size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "Oracle DB Consulting services offer specialized expertise for optimizing Oracle Databases, ensuring robust performance and effective data management strategies for businesses.",
    },
    {
      title: "Digital Transformation Solutions",
      icon: (
        <SiAmazonec2 size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "Digital Transformation solutions revolutionize businesses by seamlessly integrating advanced technologies, fostering innovation, and enhancing operational efficiency to meet the demands of the modern digital landscape.",
    },
    {
      title: "IT Automation",
      icon: (
        <AiOutlineCluster size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "IT Automation streamlines and accelerates complex workflows, enhancing operational efficiency by automating repetitive tasks, minimizing errors, and enabling organizations to focus on innovation and strategic initiatives.",
    },
    {
      title: "Data Engineering Services",
      icon: (
        <SiOpenapiinitiative size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "Data Engineering Services provide comprehensive solutions for collecting, processing, and transforming raw data into valuable insights, ensuring organizations harness the full potential of their data assets to drive informed decision-making and business success.",
    },
    {
      title: "IT Strategic and Planning",
      icon: (
        <SiDocsdotrs size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "IT Strategic and Planning services guide organizations in aligning technology initiatives with business goals, fostering a roadmap for innovation, efficiency, and optimal resource utilization.",
    },
    {
      title: "IT Staffing",
      icon: (
        <MdDiversity3 size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "IT Staffing services offer tailored solutions for businesses to secure skilled professionals, ensuring a dynamic and capable workforce that aligns with the evolving technological needs of the organization.",
    },
    {
      title: "Data Analytics and BI",
      icon: (
        <IoMdAnalytics size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "Data Analytics and BI services empower organizations to extract actionable insights from their data, enabling informed decision-making and strategic planning for enhanced business performance.",
    },
    {
      title: "IT Migration",
      icon: (
        <TbArrowAutofitContentFilled size="5rem" className="text-primary ml-[-10px] icon" />
      ),
      description:
        "IT Migration services facilitate seamless transitions, ensuring the efficient relocation of systems, applications, and data to new environments, minimizing disruptions and optimizing performance.",
    },
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
    }

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
      title="Revolutionize Your Experience with AI"
      className="bg-bg2 min-h-fit"
      titleClassName="lg:text-7xl"
    >
      <Fade bottom>
        <div className="flex flex-col-reverse md:flex-row w-full justify-between items-start min-h-[20vh] py-[2vh]">
          <div className="flex flex-col w-[90%] md:w-[35%] text-text_color2 mt-4 md:mt-0">
            <p className="text-xl lg:text-xl text-justify opacity-60">
              AI services are essential to meet the demands of an intelligent and automated digital landscape. By leveraging AI technology, our services provide efficient and innovative solutions that empower businesses and individuals. From advanced data analytics to intelligent automation and machine learning, our services offer seamless integration and enhance the overall user experience.
            </p>

            <HoverButton
              text={"Contact Us"}
              className="mt-4 w-fit rounded-md"
              icon={<AiOutlineArrowRight />}
              onClick={() => {
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
