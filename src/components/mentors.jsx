import React from "react";
import Wrapper from "./reusableComponent/wrapper";

export default function Mentors() {
  return (
    <Wrapper title={"Our Mentors"} className="bg-bg2">
      <div className="flex flex-col md:flex-row w-full h-full justify-around items-center">
        <div className="w-[90%] md:w-[40%] h-[90%] flex flex-col justify-between items-center">
          <div className="w-full h-[30vh] md:h-[40vh] rounded-lg group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618568949779-895d81686151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
          </div>
          <p className="text-3xl gil-med my-4">John doy</p>
          <p className="opacity-60 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            itaque obcaecati culpa nam eum, necessitatibus sit repudiandae
            accusantium. Expedita ipsa quibusdam dolores amet animi. Temporibus
            impedit commodi eaque ut laudantium?
          </p>
        </div>
        
        <div className="w-[90%] md:w-[40%] flex flex-col justify-between items-center mt-2 md:mt-0">
          <div className="w-full h-[30vh] md:h-[40vh] rounded-lg group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1607544836446-70a0f7e0ad95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
          </div>
          <p className="text-3xl gil-med my-4">John doy</p>
          <p className="opacity-60 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            itaque obcaecati culpa nam eum, necessitatibus sit repudiandae
            accusantium. Expedita ipsa quibusdam dolores amet animi. Temporibus
            impedit commodi eaque ut laudantium?
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
