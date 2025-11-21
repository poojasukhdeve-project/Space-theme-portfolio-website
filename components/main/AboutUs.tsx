import React from "react";
import Image from "next/image";
import "../sub/AboutUs.css";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const AboutUs: React.FC = () => {
  return (
    <div className="about-container">
      <div className="content-container">
        {/* Video: prefix with BASE so it works on GitHub Pages */}
        <video autoPlay muted loop id="background-video" playsInline>
          <source src={`${BASE}/galaxy1.mp4`} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="image-container">
          {/* next/image with unoptimized to be compatible with static export */}
          <Image
            src={`${BASE}/Astronaut1.png`}
            alt="About Us"
            width={400}
            height={400}
            className="about-image"
            unoptimized
            priority
          />
        </div>

        <div className="description-container">
          <h1>About Us</h1>
          <p>
            Welcome! I am Pooja, a seasoned web development and data analytics
            professional with over 3 years of experience. I combine deep
            expertise in programming and data-driven strategies to deliver
            comprehensive digital solutions. My skills span from crafting
            dynamic websites using technologies like JavaScript and Python to
            deriving actionable insights with analytics tools such as SQL and
            Tableau. Whether you&apos;re looking to optimize your digital
            presence or unlock the potential of your data, I am here to help
            you achieve your business goals with precision and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
