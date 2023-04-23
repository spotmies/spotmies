"use client";
import React from "react";
import cx from "classnames";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function HoverButton({ text, className, icon, type, onClick }) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      type={type ?? "button"}
      className={cx(
        `gil-reg text-sm flex flex-row items-center justify-center hover:bg-primary2 hover:text-white rounded-sm min-w-[120px]  min-h-[40px] mt-4 bg-transparent text-primary2 border border-primary2`,
        className
      )}
    >
      {text}
      {icon && <AiOutlineArrowRight className="ml-2" />}
    </button>
  );
}
