"use client";
import { socialMediaRedirect } from "@/constants";
import React from "react";
import {
  AiFillBehanceSquare,
  AiFillInstagram,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import {
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function FooterBar() {
  return (
    <div className=" w-[100vw]" id="footer">
      <footer className=" bg-bg1 text-gray-400 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between mb-12">
            <div className="w-full md:w-1/3 lg:w-1/3 pr-4">
              <img
                src="/spotmies_banner.png"
                alt="logo"
                className="w-40 mb-4"
              />
              {/* <h2 className="text-lg gil-bold mb-4">About Us</h2> */}
              <p className="mb-4 text-justify">
                Spotmies is a leading provider of innovative solutions for
                Product Designing & Blockchain. With a team of experienced
                professionals & a commitment to excellence, we are dedicated to
                helping our clients achieve their goals and stay ahead of the
                competition. Our mission is to provide high-quality services &
                products that deliver tangible results and drive business
                success.
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/5">
              <h2 className="text-lg gil-bold mb-4">Useful Links</h2>
              <ul className="list-reset">
                <li className="mb-2">
                  <a href="/#home" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/#aboutUs" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/#services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/#articles" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/5">
              <h2 className="text-lg gil-bold mb-4">More</h2>
              <ul className="list-reset">
                <li className="mb-2">
                  <a href="/#faq" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/#contactUs" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-white">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h2 className="text-lg gil-bold mb-4">Newsletter</h2>
              <p className="mb-4">
                Sign up for our newsletter and stay up-to-date with our latest
                news and offers.
              </p>
              <form className="flex mb-4">
                <input
                  required
                  className="outline-none bg-bg1 text-gray-400 border-2 border-gray-700 py-2 px-3 w-full mr-2 rounded"
                  type="email"
                  placeholder="Enter your email"
                />
                <button
                  className="bg-bg1 text-white gil-bold py-2 px-4 rounded border-2 border-gray-700 opacity-60 hover:opacity-100 transition-opacity"
                  type="submit"
                >
                  <AiOutlineArrowRight className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="text-sm text-gray-400">
              © 2023 Spotmies LLP. All Rights Reserved.
            </div>
            <div className="flex space-x-4">
              <a
                aria-label="GitHub"
                onClick={() => socialMediaRedirect("instagram")}
              >
                <AiFillInstagram className="w-6 h-6 hover:text-gray-400 transition-colors cursor-pointer" />
              </a>
              <a
                aria-label="LinkedIn"
                onClick={() => socialMediaRedirect("linkedin")}
              >
                <FaLinkedin className="w-6 h-6 hover:text-gray-400 transition-colors cursor-pointer" />
              </a>
              <a
                // href="#"
                aria-label="YouTube"
                onClick={() => socialMediaRedirect("youtube")}
              >
                <FaYoutube className="w-6 h-6 hover:text-gray-400 transition-colors cursor-pointer" />
              </a>
              <a
                // href="#"
                aria-label="Twitter"
                onClick={() => socialMediaRedirect("twitter")}
              >
                <FaTwitter className="w-6 h-6 hover:text-gray-400 transition-colors cursor-pointer" />
              </a>
              <a
                aria-label="GitHub"
                onClick={() => socialMediaRedirect("github")}
              >
                <FaGithub className="w-6 h-6 hover:text-gray-400 transition-colors cursor-pointer" />
              </a>

              <a
                aria-label="GitHub"
                onClick={() => socialMediaRedirect("behance")}
              >
                <AiFillBehanceSquare className="w-6 h-6 hover:text-gray-400 transition-colors cursor-pointer" />
              </a>

              <a
                aria-label="GitHub"
                onClick={() => socialMediaRedirect("medium")}
              >
                <BsMedium className="w-6 h-6 hover:text-gray-400 transition-colors cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
