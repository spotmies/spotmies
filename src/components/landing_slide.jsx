"use client";
import React, { useEffect, useState, Suspense } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const image =
  // "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  // "https://nftstorage.link/ipfs/bafybeifur6x6mg6u6465nojbgtuckodzghkeovjoltga7cysdzmuyvj7ku";
  "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FFirstFolder%2FTopPagePic.jpeg?alt=media&token=9906ec9d-1894-4315-b823-d73881638d03";

const LandingSlide = () => {
  return (
    <section
      className="h-screen w-full flex flex-col justify-center items-center relative bg-bg1"
      id="home">
      <div
        className="absolute inset-0 bg-black opacity-40 w-full h-full rounded-none "
        style={{ zIndex: "9" }}></div>
      <div className="fixed top-0 left-0 h-fit w-full z-50 ">
        <Navbarr />
      </div>

      <div
        className="absolute inset-0 w-full h-full rounded-none "
        style={{
          // background image
          backgroundImage: "url(/landing_page.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="absolute h-[50vh] md:h-[60vh] bg-bg1 opacity-40 w-[10vw] lg:w-[6vw] md:w-[7vw] left-0 rounded-sm animated-x">
        <div className="h-full w-full flex flex-col items-center justify-center">
          {Array(7)
            .fill(0)
            .map((_, i) => (
              <div
                className="w-full h-10 flex  items-center justify-between p-4"
                key={i}>
                <div className="relative z-10 bg-white rounded-full w-1 h-1 m-2" />
                <div className="relative z-10 bg-white rounded-full w-1 h-1 m-2" />
                <div className="relative z-10 bg-white rounded-full w-1 h-1 m-2" />
              </div>
            ))}
        </div>
      </div>

      <div className="absolute z-10 text-center text-white w-[70%] animated">
        <h1 className="text-3xl md:text-6xl lg:text-8xl gil-bold mb-4 text-left w-full md:w-[70%] opacity-85 animated">
          Innovative solutions to stay ahead of the competition
        </h1>
        <p className="text-sm md:text-lg lg:text-2xl mb-8 text-left opacity-70 w-full md:w-[50%] lg:w-[60%] pl-1 md:pl-2 lg:pl-3 animated">
          Professional services that deliver exceptional quality, reliability,
          and customer service to exceed your expectations.
        </p>
        <div className="w-full flex flex-row items-center justify-left z-50 ml-1">
          {/* <HoverButton
            onClick={() => {
             
              window.document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" });
            }}
            text="Read More"
            className=" border-white"
            
          /> */}
          <button
            onClick={() => {
              const calendlyLink = "https://calendly.com/spotmies/30min";
              window.open(calendlyLink, "_blank");
            }}
            type={"button"}
            className={`gil-reg text-xs md:text-sm lg:text-xl flex flex-row items-center justify-center hover:bg-white hover:text-bg1 rounded-sm md:min-w-[160px] min-w-[140px] lg:min-w-[210px] md:min-h-[40px] min-h-[30px] lg:min-h-[50px] mt-4 bg-transparent text-white border border-white animated`}>
            Schedule a Call
            <AiOutlineArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export const Navbarr = ({ noScrollEffect, career }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  const navigation = (id) => {
    // navigation by id
    if (career) {
      window.location.href = `/#${id}`;
    }
    else {
      window.document
        .getElementById(id ?? "services")
        .scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scheduleMeeting = () => {
    const calendlyLink = "https://calendly.com/spotmies/30min";
    window.open(calendlyLink, "_blank");
  };

  useEffect(() => {
    const navigationBar = document.getElementById("navigationBar");
    // navigation bar color change when it's reach to 100vh from top
    if (noScrollEffect) {
      navigationBar.classList.remove("bg-transparent");
      navigationBar.classList.add("opacity-90");
      navigationBar.classList.add("bg-primary2");
      navigationBar.classList.add("shadow-sm");
      return;
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > window.innerHeight - 80 && !noScrollEffect) {
        navigationBar.classList.remove("bg-transparent");
        navigationBar.classList.add("opacity-90");
        navigationBar.classList.add("bg-primary2");
        navigationBar.classList.add("shadow-sm");
        // setToggleNavbar(true);
      } else {
        navigationBar.classList.remove("bg-primary2");
        navigationBar.classList.remove("opacity-90");
        navigationBar.classList.add("bg-transparent");
        navigationBar.classList.remove("shadow-sm");
        // setToggleNavbar(false);
      }
    });
  }, []);

  return (
    <nav
      className="bg-transparent fixed w-full z-10 px-5 md:px-[5vw] lg:px-[5vw] animated-down"
      id="navigationBar">
      <div className="container mx-auto flex justify-between items-center py-4 lg:py-6">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            // navigate to #home
            window.location.href = "/";
          }}>
          <img
            src={toggleNavbar ? "/spotmies_banner.png" : "/spotmies_banner.png"}
            alt="Logo"
            className=" h-6 md:h-10 lg:h-14 cursor-pointer"
          />
        </div>
        <div className="flex items-center">
          <button
            className={`${toggleNavbar ? "text-primary" : "text-white"
              } hover:text-secundary focus:outline-none md:hidden`}
            aria-label="Menu"
            onClick={toggleMenu}>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="menu w-6 h-6">
              <path
                fillRule="evenodd"
                d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm1 4a1 1 0 100 2h14a1 1 0 100-2H3z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <a
            onClick={() => navigation("services")}
            className={`${toggleNavbar ? "text-primary" : "text-white"
              }  mx-4 border-b-2 border-transparent hover:border-secundary cursor-pointer lg:text-xl`}
          >
            Services
          </a>
          <a
            onClick={() => navigation("portfolio")}
            className={`${toggleNavbar ? "text-primary" : "text-white"
              }  mx-4 border-b-2 border-transparent hover:border-secundary cursor-pointer lg:text-xl`}
          >
            Portfolio
          </a>

          <a
            onClick={() => navigation("about")}
            className={`${toggleNavbar ? "text-primary" : "text-white"
              }  mx-4 border-b-2 border-transparent hover:border-secundary cursor-pointer lg:text-xl`}
          >
            About Us
          </a>
          <Link
            href="/blog"
            className={`${toggleNavbar ? "text-primary" : "text-white"
              }  mx-4 border-b-2 border-transparent hover:border-secundary cursor-pointer lg:text-xl`}
          >
            Blogs
          </Link>

          <a
            onClick={() => navigation("reaidy")}
            className={`${toggleNavbar ? "text-primary" : "text-white"
              }  mx-4 border-b-2 border-transparent hover:border-secundary cursor-pointer lg:text-xl`}
          >
            Product
          </a>

          <a
            onClick={() => navigation("contactUs")}
            className={`${toggleNavbar ? "text-primary" : "text-white"
              }  mx-4 border-b-2 border-transparent hover:border-secundary cursor-pointer lg:text-xl`}
          >
            Contact Us
          </a>

          <Link href="/career"
            className={`${toggleNavbar ? "text-primary" : "text-white"
              }  mx-4 border-b-2 border-transparent hover:border-secundary cursor-pointer lg:text-xl`}
          >
            Careers
          </Link>
          <a
            onClick={scheduleMeeting}
            className={`${
              toggleNavbar ? "text-primary" : "text-white"
            }  mx-4 border-b-2 border-secundary cursor-pointer lg:text-xl`}>
            Schedule a Call
          </a>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } md:hidden bg-white transition-all duration-700 ease-in-out`}>
        <a
          onClick={() => navigation("services")}
          className="block px-4 py-2 text-primary2 border-b-2 border-transparent hover:border-secundary cursor-pointer">
          Services
        </a>

        <a
          onClick={() => navigation("portfolio")}
          className="block px-4 py-2 text-primary2 border-b-2 border-transparent hover:border-secundary cursor-pointer">
          Portfolio
        </a>
        <a
          onClick={() => navigation("about")}
          className="block px-4 py-2 text-primary2 border-b-2 border-transparent hover:border-secundary cursor-pointer">
          About Us
        </a>
        <Link
          href="/blog"
          className="block px-4 py-2 text-primary2 border-b-2 border-transparent hover:border-secundary cursor-pointer"
        >
          Blogs
        </Link>
        <a
          onClick={() => navigation("reaidy")}
          className="block px-4 py-2 text-primary2 border-b-2 border-transparent hover:border-secundary cursor-pointer">
          Product
        </a>
        <a
          onClick={() => navigation("contactUs")}
          className="block px-4 py-2 text-primary2 border-b-2 border-transparent hover:border-secundary cursor-pointer">
          Contact Us
        </a>
        <Link href="/career"
          className="block px-4 py-2 text-primary2 border-b-2 border-transparent hover:border-secundary cursor-pointer"
        >
          Careers
        </Link>
        <a
          onClick={scheduleMeeting}
          className="block px-4 py-2 text-primary2 border-b-2 border-transparent hover:border-secundary cursor-pointer">
          Schedule a Call
        </a>
      </div>
    </nav>
  );
};

export default LandingSlide;

// hidden md:flex items-center
