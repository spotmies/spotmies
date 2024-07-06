"use client";
import React, { useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Fade } from "react-reveal";
import { PopUp } from "./services";

export default function Mentor2() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const ourMentorDetails = [
    {
      description:
        "Ravi has 24 years of experience in heading Business, Strategy, Sales, Operations & Corporate Quality across the globe for large corporate and start-ups. Ravi's focus areas were devising Strategy and leading Business Process Reengineering, Business Turnaround, New Product/Service Development, Manufacturing & Supply Chain Optimization, Six Sigma Consulting, Digitization and Cost Optimization Initiatives for Fortune 500 firms (Caterpillar, General Electric, General Motors, Mitsubishi HM India, Mahindra & Mahindra, Dunlop, Castrol). His last assignment before turning an Entrepreneur was Head – Corporate Quality (CQO) at Mahindra Satyam (now Tech Mahindra). Prior to his Sr. Management role heading companywide Quality, Ravi was the Business Leader for managing a large client from India, China, Hungary, Mexico and Malaysia.",
    },
    {
      description:
        "Ravi's entrepreneurial journey started in 2012 and he had a successful exit selling his stake in his first entrepreneurial outing (Pena4 Tech). Ravi is currently angel invested and also help in strategy and sales at the four growth stage start-ups that are all profit making as of today. Ravi is a serial entrepreneur as identified by Inc42 as one of the top angel investors in state of Andhra Pradesh, India.",
    },
    {
      description:
        "He was conferred with awards like the NASSCOM Innovation Award, “Best of the Best” Chairman's Honour Award of General Motors USA, “CIO award” for exceptional performance at OnStar Corp. USA, Best Strategy amongst the 80+ Mahindra & Mahindra group companies. Ravi worked with Board of Directors at Mahindra Satyam & M&M in the revival and merger of Mahindra Satyam with TechMahindra.",
    },
    {
      description:
        "Ravi is now the CEO of Andhra University Incubation Hub(ā hub) and working towards establishing ā hub as one of India's largest Integrated University Incubation Ecosystem (only University in India to be rated 4 star in MoEs IIC ranking). Ravi spends time in mentoring and growth of start-ups, turnaround of ailing companies, investing in early-stage start-ups, devising start-up business strategy, awareness sessions on entrepreneurship, start-up pitching and strategy sessions across India.",
    },
    {
      description:
        "Ravi is professional tennis player and loves to indulge in sports, movies, music and travel.",
    },
    {
      description:
        "Cofounder & Director - Alcove Partners (Startup mentoring and Angel Investment firm)",
    },
    {
      description:
        "Cofounder & Director - Schemax Tech (IT Product Development & Services Startup)",
    },
    {
      description:
        "Cofounder & Director - ANTAR IOT (Home and Industrial Automation Product Startup)",
    },
    {
      description: "Cofounder & Director - InterviewBuddy (HR Tech Startup)",
    },
    {
      description: "Cofounder & Director - gny.ai (FinTech Startup)",
    },
    {
      description: "Director - Pena4 Tech (US based BPM company in Healthcare)",
    },
    {
      description:
        "President - TiE AP (largest Non-Profit organization connecting entrepreneurship ecosystem)",
    },
    {
      description:
        "Advisory Board - iTAAP (IT & ITeS Association of Andhra Pradesh)",
    },
  ];

  return (
    <div className="w-[100vw] h-[130vh] md:h-[100vh] bg-bg2 flex flex-col items-center justify-center">
      <PopUp
        show={isPopupOpen}
        setShow={setIsPopupOpen}
        title={"Ravi Eswarapu"}
        body={ourMentorDetails}
      />
      <div className="block md:hidden w-full h-full py-[5%]">
        <div className="w-[90%] md:w-[90%] h-[40%] m-auto overflow-hidden rounded-2xl">
          <div
            className="w-full h-full rounded-2xl hover:scale-110 transition-all duration-700 ease-in-out"
            style={{
              backgroundImage:
                "url(https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2Four%20mentor%2FRaviSir.png?alt=media&token=beb9f30c-2265-450d-9b60-40d173d1bd36)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="flex flex-col items-start z-20 w-[90%] py-[5%] m-auto text-bg1">
          <Fade bottom>
            {" "}
            <p className="text-md">- Our mentor</p>
          </Fade>
          <Fade bottom>
            <p className="gil-bold text-4xl">Ravi Eswarapu</p>
          </Fade>
          <Fade bottom>
            <p className="text-md gil-bold opacity-60">
              CEO at A-HUB | President at TiE AP | Angel Investor
            </p>
          </Fade>
          <Fade bottom>
            <p className="text-xl pt-5 opacity-75 text-justify text-gray-400">
              Ravi is a seasoned professional with over 24 years of experience
              in business, strategy, sales, operations, and corporate quality
              for large corporations and start-ups. He has worked with top
              companies such as Caterpillar, General Electric, and Mahindra &
              Mahindra, and has received awards like the NASSCOM Innovation
              Award and the Best Strategy award amongst the 80+ Mahindra &
              Mahindra group companies.
            </p>
          </Fade>
          <Fade bottom>
            <p
              className="gil-med text-md md:text-xl text-primary flex items-center cursor-pointer"
              onClick={() => {
                setIsPopupOpen(true);
              }}
            >
              Learn More&nbsp; <BsArrowUpRightCircle />{" "}
            </p>
          </Fade>
        </div>
      </div>
      <div className="w-[90%] md:w-[90%] h-[80%] group overflow-hidden rounded-3xl hidden md:flex flex-row justify-between items-start relative">
        <div
          className="w-full h-full rounded-3xl group-hover:scale-110 transition-all duration-700 ease-in-out absolute inset-0"
          style={{
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2Four%20mentor%2FRaviSir.png?alt=media&token=beb9f30c-2265-450d-9b60-40d173d1bd36)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-60 transition-all duration-700 ease-in-out opacity-layer rounded-md md:rounded-3xl" />
        <div className="flex flex-col items-start z-20 w-[40%] absolute right-0  my-auto py-[5%] pr-[3%] text-bg2">
          <Fade bottom>
            {" "}
            <p className="text-md lg:text-lg">- Our mentor</p>
          </Fade>

          <Fade bottom>
            <p className="gil-bold text-4xl lg:text-5xl">Ravi Eswarapu</p>
          </Fade>

          <Fade bottom>
            <p className="text-md lg:text-lg gil-bold opacity-60">
              CEO at A-HUB | President at TiE AP | Angel Investor
            </p>
          </Fade>
          <Fade bottom>
            <p className="text-xl lg:text-3xl pt-5 opacity-75 text-justify text-gray-400">
              Ravi is a seasoned professional with over 24 years of experience
              in business, strategy, sales, operations, and corporate quality
              for large corporations and start-ups. He has worked with top
              companies such as Caterpillar, General Electric, and Mahindra &
              Mahindra, and has received awards like the NASSCOM Innovation
              Award and the Best Strategy award amongst the 80+ Mahindra &
              Mahindra group companies.
            </p>
          </Fade>
          <Fade bottom>
            <p
              className="gil-med text-sm md:text-xl lg:text-2xl pt-5 text-primary flex items-center cursor-pointer"
              onClick={() => {
                setIsPopupOpen(true);
              }}
            >
              Learn More&nbsp; <BsArrowUpRightCircle />{" "}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}
