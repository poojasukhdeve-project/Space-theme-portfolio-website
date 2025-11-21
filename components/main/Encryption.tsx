"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

/**
 * Prefix assets with NEXT_PUBLIC_BASE_PATH (set to "/Space-theme-portfolio-website" for GitHub Pages)
 * so they resolve both in local dev and when deployed to a subpath.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Encryption: React.FC = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      {/* Heading (animated) */}
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      {/* Center icons + label */}
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src={`${BASE}/LockTop.png`}
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            unoptimized
            priority
          />
          <Image
            src={`${BASE}/LockMain.png`}
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10"
            unoptimized
            priority
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>

      {/* Bottom caption */}
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      {/* Background video — prefix with BASE and remove trailing slash */}
      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="auto"
          className="w-full h-auto object-cover"
          // IMPORTANT: no trailing slash; prefix with BASE for GitHub Pages subpath
          src={`${BASE}/encryption.webm`}
        />
      </div>
    </div>
  );
};

export default Encryption;
