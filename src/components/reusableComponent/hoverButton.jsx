"use client";
import cx from "classnames";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function HoverButton({
  text,
  className,
  icon,
  type,
  onClick,
  loading = false,
}) {
  return (
    <button
      disabled={loading}
      onClick={() => {
        if (!loading && onClick) onClick();
      }}
      type={type ?? "button"}
      className={cx(
        `gil-reg text-sm lg:text-lg flex flex-row items-center justify-center hover:bg-primary2 hover:text-white rounded-sm min-w-[120px] lg:min-w-[140px] lg:min-h-[50px] min-h-[40px] mt-4 bg-transparent text-primary2 border border-primary2 ${
          loading ? "cursor-default" : "cursor-pointer"
        } `,
        className
      )}
    >
      {loading ? "Please Wait..." : text}
      {icon && <span className="ml-2" />}
      {icon && icon}
    </button>
  );
}
