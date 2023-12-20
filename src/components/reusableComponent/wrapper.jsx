"use client";
import React from "react";
import cx from "classnames";
import { Fade } from "react-reveal";

export default function Wrapper({
  title,
  className,
  titleClassName,
  children,
}) {
  return (
    <div className={cx(`w-[100vw] min-h-[100vh]`, className)} id="works">
      <div className=" flex flex-col justify-center w-[90%] h-full py-[4vh] m-auto ">
        <Fade bottom>
          <p
            className={cx(
              `gil-bold text-3xl md:text-6xl text-left pb-12 text-text_color2`,
              titleClassName
            )}
          >
            {title}
          </p>
        </Fade>
        {children}
      </div>
    </div>
  );
}
