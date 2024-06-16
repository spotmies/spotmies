"use client";
import { socialMediaRedirect } from "@/constants";
import React, { useState } from "react";
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

import axios from 'axios';

export default function FooterBar() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email to the API using Axios
    axios.post('https://script.google.com/macros/s/AKfycbxmCKtzq0paW6ovftholsG1MqTpYVngu6JE6n12HWYnysF78xpS/exec', email )
      .then(response => {
        console.log(response.data);   // Handle the API response
      })
      .catch(error => {
        console.error(error); // Handle any errors
      });
  };
  return (
    <div className=" w-[100vw]" id="footer">
      <footer className=" bg-bg1 text-gray-400 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between mb-12">
            <div className="w-full md:w-1/3 lg:w-1/3 pr-4">
              <img
                src="/spotmies_banner.png"
                alt="logo"
                className="w-52 mb-4"
              />
              {/* <h2 className="text-lg gil-bold mb-4">About Us</h2> */}
              <p className="mb-4 text-justify lg:text-xl">
                Spotmies is a leading provider of innovative solutions for
                Product Designing & Blockchain. With a team of experienced
                professionals & a commitment to excellence, we are dedicated to
                helping our clients achieve their goals and stay ahead of the
                competition. Our mission is to provide high-quality services &
                products that deliver tangible results and drive business
                success.
              </p>
            </div>
            <div className="w-full md:w-1/5 lg:w-1/5">
              <h2 className="text-lg lg:text-xl gil-bold mb-4">Useful Links</h2>
              <ul className="list-reset">
                <li className="mb-2 lg:text-xl">
                  <a href="/#home" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li className="mb-2 lg:text-xl">
                  <a href="/#aboutUs" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li className="mb-2 lg:text-xl">
                  <a href="/#services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li className="mb-2 lg:text-xl">
                  <a href="/#articles" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li className="mb-2 lg:text-xl">
                  <a href="/career" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/5 lg:w-1/5">
              <h2 className="text-lg lg:text-xl gil-bold mb-4">More</h2>
              <ul className="list-reset">
                <li className="mb-2 lg:text-xl">
                  <a href="/#faq" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li className="mb-2 lg:text-xl">
                  <a href="/#contactUs" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2 lg:text-xl">
                  <a href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2 lg:text-xl">
                  <a href="#" className="hover:text-white">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/5 lg:w-1/4">
              <h2 className="text-lg lg:text-xl gil-bold mb-4">Newsletter</h2>
              <p className="mb-4 lg:text-xl">
                Sign up for our newsletter and stay up-to-date with our latest
                news and offers.
              </p>
              <form onSubmit={handleSubmit} className="flex mb-4 lg:text-xl" >
                <input
                  required
                  className="outline-none bg-bg1 text-gray-400 border-2 border-gray-700 py-2 px-3 w-full mr-2 rounded"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button
                  className="bg-bg1 text-white gil-bold py-2 px-4 rounded border-2 border-gray-700 opacity-60 hover:opacity-100 transition-opacity"
                  type="submit"
                >
                  <AiOutlineArrowRight className="w-6 h-6" />
                </button>
              </form>
              <div className="pt-4">
                <h2 className="text-lg lg:text-xl gil-bold mb-2">
                  Recognized By
                </h2>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2Flast%20image%2Fstartupindia.png?alt=media&token=403f5acd-a208-48dd-9343-27e3389d3e3f"
                  className="w-[250px] md:w-full lg:w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm lg:text-lg text-gray-400">
              © 2024 Spotmies LLP. All Rights Reserved.
            </div>
            <div className="flex space-x-4 md:pt-0 lg:pt-0 pt-4">
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
