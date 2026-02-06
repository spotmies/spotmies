"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  BsArrowLeftCircle,
  BsArrowRightCircleFill,
  BsArrowUpRightCircle,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { Fade } from "react-reveal";
import { blogData } from "@/constants/blogData";
import { blogApi } from "@/lib/blogApi";
import Link from "next/link";

const ArticlesList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await blogApi.getAllBlogs();
        // Use API data if available, otherwise fallback to static data
        setBlogs(fetchedBlogs.length > 0 ? fetchedBlogs : blogData);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
        // Fallback to static data
        setBlogs(blogData);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-[50vh] h-fit w-[100vw] bg-bg2" id="articles">
      <div className="py-10 w-full text-black gil-reg">
        <div className="w-[90%] m-auto">
          <div className="flex flex-row justify-between items-center w-full pb-8">
            <Fade bottom>
              <p className="gil-bold text-3xl md:text-5xl text-primary2">
                Follow the latest articles & news
              </p>
            </Fade>
          </div>
          <div className="opacity-40">
            <Fade bottom>
              <p className="w-full md:w-[70%] pb-5 opacity-60 text-sm md:text-xl lg:text-2xl">
                Stay up-to-date with the latest trends and insights in your
                industry by following Spotmies's news and articles. We publish
                regular updates on topics ranging from technology and innovation
                to business strategy and marketing.
              </p>
            </Fade>
          </div>
          <Fade>
            <div className="flex flex-col md:flex-row w-full items-center justify-between ">
              {loading ? (
                // Loading state
                Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="text-primary2 bg-white flex flex-col items-start justify-between md:justify-between lg:justify-around h-fit md:h-[550px] lg:h-[600px] w-full md:w-[400px] lg:w-[500px] rounded-2xl shadow-sm p-3 md:m-0 m-2 animate-pulse"
                  >
                    <div className="w-full h-[65%] md:h-[45%] lg:h-[60%] bg-gray-300 rounded-lg"></div>
                    <div className="flex flex-col items-start justify-center pt-4 lg:pt-0 pl-2 w-full">
                      <div className="h-4 bg-gray-300 w-32 rounded mb-2"></div>
                      <div className="h-6 bg-gray-300 w-48 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 w-full rounded"></div>
                    </div>
                  </div>
                ))
              ) : (
                blogs.map((item, index) => (
                <div
                  key={index}
                  className="text-primary2 bg-white flex flex-col items-start justify-between md:justify-between lg:justify-around h-fit md:h-[550px] lg:h-[600px] w-full md:w-[400px] lg:w-[500px] rounded-2xl shadow-sm  p-3 md:m-0 m-2"
                >
                  <Fade>
                    <div className="relative w-full h-[65%] md:h-[45%] lg:h-[60%]">
                      <img
                        src={item.featuredImage}
                        alt={item.title}
                        className="h-full w-full object-cover rounded-lg"
                      />
                      <span className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs">
                        {item.category}
                      </span>
                    </div>
                  </Fade>
                  <div className="flex flex-col items-start justify-center pt-4 lg:pt-0 pl-2 w-full">
                    <div className="opacity-50 flex justify-between w-full pr-4">
                      <Fade bottom>
                        <p className="text-xs lg:text-sm text-primary2 opacity-70">
                          {new Date(item.updatedAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        <p className="text-xs lg:text-sm text-primary2 opacity-70">
                          Written by {item.author}
                        </p>
                      </Fade>
                    </div>
                    <Fade bottom>
                      <p className="text-2xl lg:text-xl pb-2 pt-6 lg:pt-3 text-primary2 gil-med">
                        {item.title}
                      </p>
                    </Fade>
                    <div className="opacity-50">
                      <Fade bottom>
                        <p className="opacity-70 text-sm md:text-sm lg:text-base text-primary2 text-ellipsis w-full overflow-hidden lg:overflow-visible h-[40px]">
                          {item.excerpt}
                        </p>
                      </Fade>
                    </div>
                    <Fade bottom>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="flex flex-row items-center justify-start pt-6 lg:pt-8 pb-2 cursor-pointer"
                      >
                        <p className="gil-bold text-sm lg:text-lg md:text-sm text-primary">
                          KNOW MORE
                        </p>
                        <BsArrowUpRightCircleFill className="inline-block text-md md:text-md lg:text-lg ml-2 text-primary" />
                      </Link>
                    </Fade>
                  </div>
                </div>
              ))
              )}
            </div>
          </Fade>
        </div>
        <center className="mt-5"><a href='/blog' className="text-lg text-black py-2 hover:bg-black hover:text-white border border-black px-5 rounded-lg">View More</a></center>
      </div>
    </div>
  );
};

export default ArticlesList;
