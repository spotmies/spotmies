import React from "react";

const Header = ({title,stylesimg}) => {
  return (
    <div className="w-full m-2  lg:h-[50vh] h-[30vh]">
      <div
        className={`${stylesimg}`}
        >
        <div class="flex flex-col items-center ">
          
          <div class="flex flex-col  items-center text-center  max-w-7xl   my-8 py-4 px-10 justify-center">
           
            <div class="flex flex-col text-gray-700 mt-5">
              <h1 class="text-4xl md:text-[50px] font-semibold text-white lg:mt-[200px] ">
               {title}
              </h1>
             
            </div>
            
           
            
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Header;
