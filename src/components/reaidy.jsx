"use client";
import React, { useState, useEffect } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import CountUp from "react-countup";
import { Fade } from "react-reveal";

export default function ReaidySlide() {
  // List of blocked URLs where the component should NOT be shown
  const blockedUrls = ["www.spotmies.ai", "anotherblockedsite.com"]; // Add your blocked hostnames here

  // Check if the current hostname is in the blocked list


  const redirectToReaidySite = () => {
    window.open("https://reaidy.io", "_blank");
  };

  const [data, setData] = useState([]); // Initialize as an empty array

  const [isClient, setIsClient] = useState(false);

  const shouldShowComponent = isClient && !blockedUrls.includes(window.location.hostname);

  useEffect(() => {
    // This will set isClient to true once the component is mounted in the browser
    setIsClient(true);
  }, []);

  useEffect(() => {
    async function apiGet() {
      try {
        const response = await fetch(
          "https://reaidynodejs2.azurewebsites.net/api/analytics/dashboard-details"
        );
        const apidata = await response.json();
        setData(apidata.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    apiGet();
  }, []);

  const getValueByName = (name) => {
    if (!Array.isArray(data)) {
      console.error("Data is not an array:", data);
      return 0; // or handle the error appropriately
    }

    for (let i = 0; i < data.length; i++) {
      if (data[i].name === name) {
        let value = data[i].value;
        let valueStr = value.toString();

        // Check if the value has non-zero digits after the first digit
        let nonZeroFound = false;
        for (let j = 1; j < valueStr.length; j++) {
          if (valueStr[j] !== "0") {
            nonZeroFound = true;
            break;
          }
        }

        if (nonZeroFound) {
          // Calculate rounded value
          let roundedValue =
            Math.floor(value / Math.pow(10, valueStr.length - 1)) *
            Math.pow(10, valueStr.length - 1);
          return roundedValue;
        }

        return value;
      }
    }

    return false; // Default return value if name is not found
  };

  if (!shouldShowComponent) {
    return null; // If the hostname is in the blocked list, return null to hide the component
  }

  return (
    <div
      id="reaidy"
      className="w-[100vw] h-full md:h-[100vh] bg-[#171717] flex flex-col items-center justify-center">
      <div className="block md:hidden w-full h-full py-[5%]">
        <div className="w-[90%] md:w-[90%] h-[30%] m-auto overflow-hidden rounded-2xl">
          <div
            className="w-full h-60 md:h-full rounded-2xl hover:scale-110 transition-all duration-700 ease-in-out"
            style={{
              backgroundImage: "url(/reaidy-bg-mobile.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="flex flex-col items-start z-20 w-[90%] py-[5%] m-auto text-bg2">
          <Fade bottom>
            {" "}
            <p className="text-md text-[#0098a3]">- Our Product</p>
          </Fade>
          <Fade bottom>
            <img
              src="https://reaidystorage.blob.core.windows.net/spotmiespublic/reaidy white logo.png"
              alt="reaidy"
              className="w-[50%]"
            />
          </Fade>
          <Fade bottom>
            <p className="text-xl pt-5 opacity-75 text-justify text-gray-400 font-semibold">
              Reaidy is an innovative AI-powered platform designed to empower
              students and aspiring professionals in their journey towards
              career success by providing realistic mock interview simulations
              and a structured learning roadmap. With AI-driven mock interviews,
              users can refine their interview skills, tackling behavioral and
              technical questions, while receiving personalized feedback and
              analysis.
            </p>
          </Fade>
          <Fade bottom>
            <div className="flex flex-row w-full items-center justify-between pt-[5%] mb-[5%]">
              <div className="flex flex-col items-center justify-center">
                <p className="gil-med text-3xl lg:text-4xl text-[#0098a3]">
                  <CountUp
                    enableScrollSpy={true}
                    end={getValueByName("total_users") || "6000"}
                  />
                  <span className="md:mb-[15px] mb-[8px]">+</span>
                </p>
                <p className="gil-reg text-md md:text-lg lg:text-3xl">Users</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="gil-med text-3xl lg:text-4xl text-[#0098a3]">
                  <CountUp
                    enableScrollSpy={true}
                    end={getValueByName("total_interviews") || "6000"}
                  />
                  <span className="md:mb-[15px] mb-[8px]">+</span>
                </p>
                <p className="gil-reg text-md md:text-lg lg:text-3xl">
                  Interviews
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="gil-med text-3xl lg:text-4xl text-[#0098a3]">
                  <CountUp
                    enableScrollSpy={true}
                    end={getValueByName("total_users_company") || "100"}
                  />
                  <span className="md:mb-[15px] mb-[8px]">+</span>
                </p>
                <p className="gil-reg text-md md:text-lg lg:text-3xl">
                  Companies
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <p
              className="gil-bold text-xl md:text-xl text-[#0098a3] flex items-center cursor-pointer"
              onClick={() => {
                redirectToReaidySite();
              }}>
              Learn More&nbsp; <BsArrowUpRightCircle />{" "}
            </p>
          </Fade>
        </div>
      </div>
      <div className="w-[90%] md:w-[90%] h-[85%] group overflow-hidden rounded-3xl hidden md:flex flex-row justify-between items-start relative">
        <div
          className="w-full h-full rounded-3xl group-hover:scale-110 transition-all duration-700 ease-in-out absolute inset-0"
          style={{
            backgroundImage: "url(/reaidy-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-30 transition-all duration-700 ease-in-out opacity-layer rounded-md md:rounded-3xl" />
        <div className="flex flex-col items-start z-20 w-[40%] absolute right-0  my-auto py-[5%] pr-[3%] text-bg2">
          <Fade bottom>
            {" "}
            <p className="text-lg font-semibold lg:text-lg text-[#0098a3]">
              - Our Product
            </p>
          </Fade>

          <Fade bottom>
            <img
              src="https://reaidystorage.blob.core.windows.net/spotmiespublic/reaidy white logo.png"
              alt="reaidy"
              className="w-[50%]"
            />
          </Fade>

          <Fade bottom>
            <p className="text-xl lg:text-3xl pt-5 opacity-75 text-justify text-gray-400">
              Reaidy is an innovative AI-powered platform designed to empower
              students and aspiring professionals in their journey towards
              career success by providing realistic mock interview simulations
              and a structured learning roadmap. With AI-driven mock interviews,
              users can refine their interview skills, tackling behavioral and
              technical questions, while receiving personalized feedback and
              analysis.
            </p>
          </Fade>
          <Fade bottom>
            <div className="flex flex-row w-full items-center justify-between pt-[5%]">
              <div className="flex flex-col items-center justify-center">
                <p className="gil-med text-3xl lg:text-4xl text-[#0098a3]">
                  <CountUp
                    enableScrollSpy={true}
                    end={getValueByName("total_users") || "6000"}
                  />
                  <span className="md:mb-[15px] mb-[8px]">+</span>
                </p>
                <p className="gil-reg text-md md:text-lg lg:text-3xl">Users</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="gil-med text-3xl lg:text-4xl text-[#0098a3]">
                  <CountUp
                    enableScrollSpy={true}
                    end={getValueByName("total_interviews") || "6000"}
                  />
                  <span className="md:mb-[15px] mb-[8px]">+</span>
                </p>
                <p className="gil-reg text-md md:text-lg lg:text-3xl">
                  Interviews
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="gil-med text-3xl lg:text-4xl text-[#0098a3]">
                  <CountUp
                    enableScrollSpy={true}
                    end={getValueByName("total_users_company") || "100"}
                  />
                  <span className="md:mb-[15px] mb-[8px]">+</span>
                </p>
                <p className="gil-reg text-md md:text-lg lg:text-3xl">
                  Companies
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <p
              className="gil-bold text-xl md:text-xl text-[#0098a3] flex items-center cursor-pointer"
              onClick={() => {
                redirectToReaidySite();
              }}>
              Learn More&nbsp; <BsArrowUpRightCircle />{" "}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}
