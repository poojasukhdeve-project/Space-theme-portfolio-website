import React from "react";
import HeroContent from "../sub/HeroContent";

/**
 * Prefix public assets with NEXT_PUBLIC_BASE_PATH so assets resolve correctly
 * in local dev (empty) and GitHub Pages (e.g. /Space-theme-portfolio-website).
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        {/* Use the BASE prefix so this resolves to:
            - /blackhole.webm (local dev)
            - /Space-theme-portfolio-website/blackhole.webm (GitHub Pages) */}
        <source src={`${BASE}/blackhole.webm`} type="video/webm" />
        {/* Fallback text */}
        Your browser does not support the video tag.
      </video>

      <HeroContent />
    </div>
  );
};

export default Hero;
