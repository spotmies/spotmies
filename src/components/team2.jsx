"use client";
import React from "react";
import {
  AiFillBehanceSquare,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function TeamSlide2() {
  const teamJson = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSeventhFolder%2FSatishCEO.jpeg?alt=media&token=45293231-1b44-41c3-802e-ad9d9d0c0359",
      name: "Satish Kumar Saride",
      designation: "Founder & CEO",
      social: {
        // twitter: "https://twitter.com/satish_saride",
        linkedin: "https://www.linkedin.com/in/saride-satish-kumar-59a26a187",
      },
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSeventhFolder%2FSekhar.jpg?alt=media&token=cca2ece2-1682-4173-914e-b2bf5f74e32d",
      name: "Sekhar javvadi",
      designation: "Co-Founder & Tech Lead",
      social: {
        twitter: "https://twitter.com/SekharJavvadi",
        linkedin: "https://www.linkedin.com/in/sekhar-javvadi-987380158",
        // github: "https://github.com/sekharjavvadi",
      },
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSeventhFolder%2Fhemanth.jpg?alt=media&token=0e721a73-964a-46c5-a37a-04f72fa0d227",
      name: "Hemanth Kumar",
      designation: "Head of Blockchain Development",
      social: {
        twitter: "https://twitter.com/The_Veeranala",
        linkedin:
          "https://www.linkedin.com/in/hemanth-kumar-veeranala-967ba318a",
      },
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSeventhFolder%2FNaveen.jpeg?alt=media&token=e528b905-35c6-4475-9211-6b73dd484a3d",
      name: "Naveen Kumar",
      designation: "Head of Product Design",
      social: {
        behance: "https://www.behance.net/naveenkatava",

        linkedin: "https://www.linkedin.com/in/naveen-kumar-atava-318ba318a",
      },
    },
    {
      image:
        "https://reaidystorage.blob.core.windows.net/spotmiespublic/gowri_sankhar.jpg",
      name: "Gowri Shankar",
      designation: "Head of IoT",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/spotmies_site%2FSeventhFolder%2FSudhir.png?alt=media&token=4844d0b9-da24-4035-9f66-1ca92a33d419",
      name: "Sudhir Kumar",
      designation: "Head of Marketing",
      social: {
        linkedin: "https://www.linkedin.com/in/sudhirvolt",
      },
    },
    
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1900 },
      items: 4,
      partialVisibilityGutter: 60,
    },
    desktop: {
      breakpoint: { max: 1899, min: 1024 },
      items: 3,
      partialVisibilityGutter: 80,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <div className="w-[100vw] h-fit pb-6 bg-white flex flex-col items-start justify-start">
      <div className="w-[90%] h-[380px] m-auto">
        <Carousel
          responsive={responsive}
          partialVisible={true}
          infinite={false}
          // autoPlay={true}
        >
          {teamJson.slice(0, 6).map((item, key) => (
            <TeamCard key={key} {...item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export const TeamCard = ({ image, name, designation, social }) => {
  const navigateTo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="group  w-[300px] h-[370px] rounded-lg overflow-hidden shadow-md m-2 relative industry-card">
      <img
        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-in-out"
        src={image}
        alt={name}
      />
      <div className="absolute inset-0 bg-bg1 opacity-10 group-hover:opacity-60 transition-all duration-700 ease-in-out" />
      <div className="absolute bottom-0 px-6 py-4 flex flex-col items-center justify-center w-full">
        <div className="gil-bold text-xl text-slate-200">{name}</div>
        <div className="text-slate-300 text-base">{designation}</div>
        <div className="flex justify-evenly mt-4 w-[70%] onHoverShow">
          {social?.instagram && (
            <AiOutlineInstagram
              className="text-slate-300 cursor-pointer hover:text-[#E1306C] text-3xl"
              onClick={() => navigateTo(social?.instagram)}
            />
          )}
          {social?.twitter && (
            <AiOutlineTwitter
              className="text-slate-300 hover:text-blue-400 cursor-pointer text-3xl"
              onClick={() => navigateTo(social?.twitter)}
            />
          )}
          {social?.linkedin && (
            <AiFillLinkedin
              className="text-slate-300 hover:text-sky-600 cursor-pointer text-3xl"
              onClick={() => navigateTo(social?.linkedin)}
            />
          )}
          {social?.github && (
            <AiFillGithub
              className="text-slate-300 hover:text-black cursor-pointer text-3xl"
              onClick={() => navigateTo(social?.github)}
            />
          )}
          {social?.behance && (
            <AiFillBehanceSquare
              className="text-slate-300 hover:text-blue-500 cursor-pointer text-3xl"
              onClick={() => navigateTo(social?.behance)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
