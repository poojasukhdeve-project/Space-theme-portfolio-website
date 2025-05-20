import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Image from "next/image";
import Services from "@/components/main/Services";
import Contact from "@/components/main/Contact";
import Review from "@/components/main/Review";
import SkillP from "@/components/main/SkillP"
import AboutUs from "@/components/main/AboutUs";




export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
       <Hero/>
       <AboutUs /> 
       <SkillP />
       <Encryption />
       <Services />
       <Projects />
       <Review />
       <Contact />
      </div>
      
    </main>
  );
}
