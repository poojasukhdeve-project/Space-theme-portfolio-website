import React from "react";
import ServiceCard from "../sub/ServiceCard";

// Prefix for GitHub Pages (e.g. /Space-theme-portfolio-website)
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Services = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="services"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Services
      </h1>

      <div className="h-full w-full flex items-center justify-center flex-col md:flex-row gap-10 px-10">

        <ServiceCard
          src={`${BASE}/AppDev.png`}
          title="App Development"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <ServiceCard
          src={`${BASE}/SoftwareDev.png`}
          title="Software Development"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <ServiceCard
          src={`${BASE}/WebDev.png`}
          title="Web Development"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <ServiceCard
          src={`${BASE}/DataAnalytics.png`}
          title="Data Analytics"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

      </div>
    </div>
  );
};

export default Services;
