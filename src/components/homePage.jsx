import React from "react";
import LandingSlide from "./landing_slide";
import AboutUs from "./aboutUs";
import Services from "./services";

import FooterBar from "./footer";

import ArticlesList from "./articlesList";
import ContactUs from "./contactUs";
import Faq from "./faq";
import TeamSlide from "./team";
import TeamSlide2 from "./team2";
import PortfolioSection from "./Work/work2";
import Mentors from "./mentors";
import Testimonials from "./testimonials";
import DesignSlide from "./designSlide";
import TechSlide from "./technologies";
import HowWeStart from "./how_we_start_project";
import Mentor2 from "./mentor2";
import TechStack from "./techStack";
import BlockchainService from "./blockchainServices";
import Partners from "./partners";
import ReaidySlide from "./reaidy";
import ChatBot from "./chatBot";

export default function HomePage() {
  return (
    <div className="bg-slate-100 gil-reg">
      <LandingSlide />
      <Services />

      <AboutUs />
      <PortfolioSection />
      <HowWeStart />
      <DesignSlide />
      <TechSlide />
      <ReaidySlide />
      <BlockchainService />
      <TechStack />
     
      <Testimonials />
     
      <Partners />
      <TeamSlide />
      <TeamSlide2 />
      <Mentor2 />
      {/* <Mentors /> */}

      <Faq />
      <ArticlesList />
      <ContactUs />
      <FooterBar />
      <ChatBot />
    </div>
  );
}
