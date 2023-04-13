import React from "react";
import LandingSlide from "./landing_slide";
import AboutUs from "./aboutUs";
import Services from "./services";
import Works from "./Work/works";
import IndustriesSection from "./Work/work2";
import FooterBar from "./footer";
import AboutCompany from "./aboutCompany";
import ArticlesList from "./articlesList";
import ContactUs from "./contactUs";
import Faq from "./faq";
import TeamSlide from "./team";


export default function HomePage() {
  return (
    <div className="bg-slate-100 gil-reg">
      <LandingSlide />
      <Services />
      <IndustriesSection />
      <AboutUs />
      <TeamSlide />

      <ArticlesList />
      {/* <ContactUs /> */}
      <Faq />
      <ContactUs />
      
      <FooterBar />
      {/* <Works /> */}
    </div>
  );
}
