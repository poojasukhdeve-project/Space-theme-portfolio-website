import Image from "next/image";
import React from "react";



interface Props {
  src: string;
  title: string;
  description: string;
}

const ServiceCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
    <div className="flex justify-center items-center w-full h-auto">
      <Image
        src={src}
        alt={title}
        width={150}
        height={150}
        className="object-contain"
      />
      </div>
      <div className="relative p-4">
        <h1 className="text-1.5xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    
      
    </div>
    
    
  );
};

export default ServiceCard;