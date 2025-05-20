import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";


interface Props {
  src: string;
  name: string;
  description: string;
}

const ReviewCard = ({ src, name, description }: Props) => {
  return (
    <div className="relative overflow-hidden items-center justify-center rounded-lg shadow-lg border border-[#2A0E61]">
        
      <Image
        src={src}
        alt={name}
        width={100}
        height={100}
        className="object-content"
      />

      <div className="relative p-4">
        <h1 className="text-1xl font-semibold text-white">{name}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    
      
    </div>
    
    
  );
};

export default ReviewCard;