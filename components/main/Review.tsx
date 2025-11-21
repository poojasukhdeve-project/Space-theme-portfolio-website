import React from "react";
import ReviewCard from "../sub/ReviewCard";

// Prefix for GitHub Pages (e.g. /Space-theme-portfolio-website)
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Review = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="services"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Reviews
      </h1>

      <div className="h-full w-full flex items-center justify-center flex-col md:flex-row gap-10 px-10">
        
        <ReviewCard
          src={`${BASE}/JohnSmith.png`}
          name="John Smith"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <ReviewCard
          src={`${BASE}/alex.png`}
          name="Alex"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <ReviewCard
          src={`${BASE}/JaneDoe.png`}
          name="Jane Doe"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <ReviewCard
          src={`${BASE}/david.png`}
          name="David"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

      </div>
    </div>
  );
};

export default Review;
