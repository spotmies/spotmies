"use client";
import React from "react";
import ClientCarouselLogos from "./reusableComponent/horizontal_scrolling/client_carousel";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Fade } from "react-reveal";
import CountUp from "react-countup";

export default function AboutUs() {
  return (
    <div
      className="w-[100vw] h-fit min-h-[50vh] md:min-h-[100vh] bg-neutral-900"
      id="about"
    >
      <div className="w-[90%] h-[90vh] m-auto py-12">
        <div className="flex flex-col md:flex-row w-full items-start justify-between h-fit md:h-[30%]">
          <div className="flex flex-col items-start justify-center w-fit h-full text-text_color1">
            <Fade bottom>
              <p className="gil-med text-4xl md:text-7xl ">
                We Are <span className="text-primary">Creative</span>
                <br />
                <span className="gil-med text-5xl block md:hidden">
                  Tech Company
                </span>
              </p>
            </Fade>
            <div className="md:flex flex-row w-full items-center pl-4 pt-4 hidden">
              <Fade>
                <p className="text-4xl gil-med">
                  <span className="text-xl gil-reg">Established</span> <br />
                  2019
                </p>
              </Fade>
              <Fade bottom>
                <p className="gil-med text-8xl ml-6">Tech Company</p>
              </Fade>
            </div>
          </div>

          <div className="h-[50%] w-[1px] opacity-50 bg-bg2" />
          <div className="flex flex-col w-full md:w-[30%] items-center justify-between text-text_color1 h-full">
            <Fade>
              <p className="text-justify opacity-60">
                Discover the limitless possibilities where technology meets
                creativity. Our journey of innovation and progress is filled
                with exceptional outcomes. Join us to explore and be a part of
                something extraordinary.
              </p>
            </Fade>
            <div className="flex flex-row w-full items-center justify-between pt-[5%]">
              <div className="flex flex-col items-center justify-center">
                <p className="gil-med text-3xl">
                  <CountUp enableScrollSpy={true} end={30} />
                  <span className="md:mb-[15px] mb-[8px]">+</span>
                </p>
                <p className="gil-reg text-md">Projects</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="gil-med text-3xl">
                  <CountUp enableScrollSpy={true} end={5} />
                  <span className="md:mb-[15px] mb-[8px]">+</span>
                </p>
                <p className="gil-reg text-md">Blockchain Projects</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="gil-med text-3xl">
                  <CountUp enableScrollSpy={true} end={20} />
                  <span className="md:mb-[15px] mb-[8px]">+</span>
                </p>
                <p className="gil-reg text-md">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
        <Fade>
          <div className="relative group w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden mt-[5vh] md:mt-[10vh]">
            <div
              className=" h-full w-full object-cover rounded-3xl  group-hover:scale-110  transition-all duration-700 ease-in-out"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`,

                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
              }}
            />
          </div>
        </Fade>
      </div>
      <div className="bg-bg2 w-full h-fit md:h-[40vh] pt-[10vh] md:pt-[20vh]">
        <div className="pt-[50px] m-auto w-[90%]">
          <Fade>
            <ClientCarouselLogos />
          </Fade>
        </div>
      </div>
      <div className="bg-bg2 w-full h-[100vh] md:h-[60vh] py-[2vh] md:py-[5vh]">
        <div className="w-[90%] h-full m-auto flex flex-col-reverse md:flex-row items-start justify-between">
          <Fade>
            <div className="group overflow-hidden h-[50%] md:h-full w-full md:w-[45%] rounded-xl md:rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="w-full h-full object-cover rounded-xl md:rounded-3xl m-auto group-hover:scale-110 transition-all duration-700 ease-in-out"
              />
            </div>
          </Fade>
          <div className="flex flex-col w-full md:w-[55%] h-[40%] md:h-full items-start justify-between px-2 md:px-8 py-2 text-text_color2">
            <Fade bottom>
              {" "}
              <p className="gil-med text-sm md:text-xl">Our Mission</p>
            </Fade>
            <Fade bottom>
              {" "}
              <p className="gil-bold text-4xl md:text-5xl ">
                Making Quality Services <br /> Accessible to{" "}
                <span className="text-primary">Everyone</span>
              </p>
            </Fade>
            <div className="opacity-50">
              <Fade bottom>
                <p className="gil-reg text-sm md:text-xl text-justify opacity-50">
                  At our organization, we understand that quality of service is
                  key to building customer trust and loyalty. That's why we go
                  above and beyond to consistently deliver exceptional service
                  with attention to detail and open communication. Our focus on
                  meeting customer needs ensures their satisfaction and
                  long-term success with our company.
                </p>
              </Fade>
            </div>
            <Fade bottom>
              <p className="gil-med text-sm md:text-xl text-primary flex items-center">
                Learn More&nbsp; <BsArrowUpRightCircle />{" "}
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
