import React from "react";

const Section = ({ sectionHeader,paras,hasImage,sectionImage }) => {
  return (
    <div className="md:w-[50%]  w-[80%] bg-white">
      <div className="w-full flex flex-col justify-center items-center">
        <div>
          <h1 className="font-bold text-black md:text-left text-center  p-1 lg:text-[30px] text-[20px] my-6">
          
            {sectionHeader}
          </h1>

          { paras.map((para)=>(<p className="text-left  text-slate-700  lg:text-[20px]  text-[10px] p-1 my-4">
            {para}
          </p>))
          }

          
{hasImage &&(
          <div className="lg:h-[400px] w-full my-4  ">
             <img className="bg-conver bg-no-repeat w-full h-full p-1" src={sectionImage}/>

          </div>)}


        </div>
      </div>
    </div>
  );
};

export default Section;
