import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";


const ArticleBlocks = ({image,title,description,link,when}) => {
  return (
    <div className="text-primary2 bg-white flex flex-col items-start justify-between h-fit md:h-[430px] w-full md:w-[400px] rounded-lg shadow-sm p-3"
              >
                <img
                  src={image}
                  alt={title}
                  className="h-[50%] w-full object-cover rounded-lg"
                />
                <div className="flex flex-col items-start justify-center pt-4 pl-2">
                  <p className="text-xs text-primary2 opacity-70">
                    29 july, 2022
                  </p>
                  <p className="text-2xl pb-2 pt-6 text-primary2">
                    {title}
                  </p>
                  <p className="opacity-70 text-sm text-primary2">
                    {description}
                  </p>
                  <div
                    className="flex flex-row items-center justify-start pt-6 pb-2 cursor-pointer"
                    // onClick={() => {
                    //   if (!link) return;
                    //   window.open(link, "_blank");
                    // }}
                  >
                    <p className="gil-bold text-sm text-primary2">KNOW MORE</p>
                    <BsArrowUpRightCircleFill className="inline-block text-md ml-2 text-primary2" />
                  </div>
                </div>
              </div>
  )
}

export default ArticleBlocks
