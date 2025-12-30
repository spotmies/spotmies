"use client"
import FooterBar from '@/components/footer'
import { Navbarr } from '@/components/landing_slide'
import React, { useState, useEffect } from 'react'
import { BsFillLaptopFill } from 'react-icons/bs';
import { SiMongodb, SiNodedotjs, SiTensorflow, SiPython, SiLinux, SiBlockchaindotcom, SiBugcrowd, SiReact, SiFlutter, SiGit } from 'react-icons/si';
import axios from 'axios';

// Skeleton Component
const JobSkeleton = () => {
  return (
    <div className='border-t-4 border-gray-200 rounded-xl shadow-lg bg-white w-full h-[55vh] mt-5 px-10 py-10 animate-pulse'>
      <div className='h-full flex flex-col justify-evenly'>
        <div>
          <div className="flex items-center">
            <div className='h-10 w-10 bg-gray-200 rounded-full'></div>
            <div className='h-4 w-20 bg-gray-200 ml-3 rounded'></div>
          </div>
          <div className='h-8 w-3/4 bg-gray-200 mt-6 rounded'></div>

          <div className='mt-6 space-y-3'>
            <div className='h-4 w-full bg-gray-200 rounded'></div>
            <div className='h-4 w-5/6 bg-gray-200 rounded'></div>
            <div className='h-4 w-4/6 bg-gray-200 rounded'></div>
          </div>
        </div>
        <div className='h-12 w-32 bg-gray-200 rounded-xl'></div>
      </div>
    </div>
  )
}

export default function Career() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Initialize with 1, update after API call
  const [totalPages, setTotalPages] = useState(1);
  const limit = 4;

  const fetchJobs = async (page) => {
    setLoading(true);
    const skipValue = (page - 1) * limit;

    try {
      const response = await axios.post(`https://api.reaidy.io/public/job-post/search-jobs?skip=${skipValue}&limit=${limit}`, {
        recruiterId: ["67d1aba6681a45400442f68c", "658bd65337b2a440f7f467df"]
      });

      if (response.data && response.data.success) {
        const newJobs = response.data.data;
        setJobs(newJobs);

        // --- DYNAMIC TOTAL PAGES CALCULATION ---
        const totalItems = response.data.totalCount || response.data.count || 0;

        if (totalItems > 0) {
          setTotalPages(Math.ceil(totalItems / limit));
        } else {
          // Fallback logic if API doesn't send total count
          if (newJobs.length > 0 && totalPages < page) setTotalPages(page);
        }

        if (newJobs.length < limit) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      } else {
        setJobs([]);
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(currentPage);
    if (currentPage > 1) {
      const jobSection = document.getElementById('job-section');
      if (jobSection) jobSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const handleNext = () => {
    if (hasMore && currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // --- SLIDING WINDOW PAGINATION LOGIC ---
  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);

    if (end === totalPages) {
      start = Math.max(1, end - 4);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const stripHtml = (html) => {
    return html ? html.replace(/<[^>]*>?/gm, '') : "";
  }

  function JobCard({ job }) {
    const plainDesc = stripHtml(job.jobDescription);
    const truncatedDesc = plainDesc.length > 150 ? plainDesc.substring(0, 150) + "..." : plainDesc;
    const skills = job.requiredSkills ? job.requiredSkills.join(", ") : "";

    return (
      <div className='border-t-4 border-primary rounded-xl shadow-xl text-black gil-med w-full h-[55vh] mt-5 bg-white px-10 py-10 transition-transform hover:scale-[1.02] duration-300'>
        <div className='h-full flex flex-col justify-evenly'>
          <div>
            <div className="flex items-center">
              <BsFillLaptopFill className=' text-primary text-3xl ' />
              <p className='opacity-75 text-primary ml-3 mt-1'>Job</p>
            </div>
            <h1 className='text-2xl opacity-90 gil-med mt-3'>{job.jobTitle}</h1>
            <p className='text-sm opacity-75 mt-3'>
              <span className='font-semibold'>Primary skills:</span> {skills}<br />
              <span className='block mt-2'>{truncatedDesc}</span>
            </p>
          </div>
          <div className='flex items-center'>
            <a href={`https://reaidy.io/job/${job._id}`} target='_blank' rel="noreferrer">
              <button className='text-sm bg-primary text-white px-5 hover:bg-white border-2 hover:border-primary hover:text-primary rounded-xl py-3'>Apply</button>
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-[rgb(248,248,248)]'>
      <Navbarr noScrollEffect={true} career={true} />
      <div className='h-[100vh] bg-[#60f4ff] flex items-center flex-col'>
        <h1 className='text-7xl sm:text-8xl gil-med mt-[20vh]'>Technologies</h1>
        <div className='flex flex-wrap justify-center mt-32 gap-16'>
          {/* Tech stack icons... same as before */}
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiMongodb className='text-4xl xl:text-3xl transition-all delay-100' />
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>MERN stack</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiNodedotjs className='text-4xl xl:text-3xl transition-all delay-100' />
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Node JS</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiTensorflow className='text-4xl xl:text-3xl transition-all delay-100' />
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Artificial Intelligence</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiPython className='text-4xl xl:text-3xl transition-all delay-100' />
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Python</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiLinux className='text-4xl xl:text-3xl transition-all delay-100' />
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Linux</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiBlockchaindotcom className='text-4xl xl:text-3xl transition-all delay-100' />
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Blockchain</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiBugcrowd className='text-4xl xl:text-3xl transition-all delay-100' />
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Security</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiReact className='text-4xl xl:text-3xl transition-all delay-100' />
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>React</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiFlutter className='text-4xl xl:text-3xl transition-all delay-100' />
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Flutter</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiGit className='text-4xl xl:text-3xl transition-all delay-100' />
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Git</p>
          </div>
        </div>
      </div>

      <div className='hidden md:block lg:block' >
        <div className='image-div h-[50vh] w-[40vw] mt-[-3rem] shadow-lg mx-auto relative rounded-lg overflow-hidden '>
          <div className='linear-image-gradient w-full h-full absolute flex flex-col px-10'>
            <p className='bg-black text-primary w-fit px-4 py-2 text-gil-med text-sm rounded-full mt-10'>Featured Interview</p>
            <h1 className='z-2 text-black text-xl mt-7 gil-med font-bold'>What is your Interview <br /> Percentage telling you?</h1>
            <p className='w-[60%] mt-5 text-sm text-black font-semibold'>We have made a Website that keeps track of your interviews and help in preparing for your Interview.</p>
            <br />
            <a target='_blank' href="https://www.reaidy.io" className='text-white w-28 justify-center flex items-center h-8 mt-2 cursor-pointer rounded-lg border-2 text-sm border-white hover:bg-white hover:text-black'>Take Interview</a>
          </div>
        </div>
      </div>

      <div id="job-section" className='mx-auto w-[85%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-10 min-h-[50vh]'>
        {loading ? (
          Array.from({ length: limit }).map((_, index) => (
            <JobSkeleton key={index} />
          ))
        ) : (
          <>
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 w-full text-center py-10">
                <p className="text-xl">No jobs found.</p>
              </div>
            )}
          </>
        )}
      </div>

      {!loading && jobs.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">

          {/* --- Previous Button --- */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className='text-sm bg-white text-black px-6 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all'
          >
            Previous
          </button>

          {/* --- Numbered Pages --- */}
          <div className="flex items-center gap-2">
            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`
                            w-10 h-10 flex items-center justify-center rounded-lg text-lg font-medium transition-all
                            ${currentPage === page
                    ? 'bg-primary text-white shadow-md' // CHANGED: Uses bg-primary to match Apply button
                    : 'text-gray-500 hover:text-gray-900'
                  }
                        `}
              >
                {page}
              </button>
            ))}
          </div>

          {/* --- Next Button --- */}
          <button
            onClick={handleNext}
            disabled={!hasMore || currentPage === totalPages}
            className='text-sm bg-white text-black px-6 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all'
          >
            Next
          </button>
        </div>
      )}

      <FooterBar />
    </div>
  )
}