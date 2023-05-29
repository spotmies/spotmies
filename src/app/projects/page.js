
import { ProjectDetails } from "@/components/Work/work2";
import FooterBar from "@/components/footer";
import { Navbarr } from "@/components/landing_slide";
import React from "react";

export default function Project() {
  return (
    <div className="bg-slate-100 w-[100vw] h-fit gil-reg">
      <Navbarr noScrollEffect={true} />
      <div className="h-20" />
      <div className="w-[90%] m-auto py-8">
        <ProjectDetails index={0} />
      </div>
      <FooterBar />
    </div>
  );
}
