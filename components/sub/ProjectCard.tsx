import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
    <div className="flex justify-center items-center w-full h-auto">
      <Image
        src={src}
        alt={title}
        width={200}
        height={200}
        className="h-full object-contain"
      />
      </div>
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      
    </div>
  );
};

export default ProjectCard;