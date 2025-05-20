import React from 'react';
import SkillProgress from "../sub/SkillProgress";
import CircularSkillProgress from "../sub/CircularSkillProgress";
import '../sub/SkillProgress.css'; 

const SkillP = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-10">
       <div className="flex flex-col items-center justify-center py-20"
      id="skills">
        <h1 className="flex justify-center items-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
          Skills
        </h1>
        </div>
      <div className="flex-1">
        <h1 className="flex justify-center items-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
          Technical Skills
        </h1>
        <div className="text-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
          <SkillProgress skill="React" percentage={80} />
          <SkillProgress skill="TypeScript" percentage={75} />
          <SkillProgress skill="HTML" percentage={90} />
          <SkillProgress skill="JavaScript" percentage={60} />
          <SkillProgress skill="CSS" percentage={90} />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex-1">
          <h1 className="flex justify-center items-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
            Professional Skills
          </h1>
          <div className="text-[20px] font-bold flex flex-row justify-center">
            <div className="flex-1">
              <CircularSkillProgress skill="80% Communication" percentage={80} />
              <CircularSkillProgress skill="65% Creativity" percentage={60} />
            </div>
            <div className="flex-1">
              <CircularSkillProgress skill="60% Problem Solving" percentage={60} />
              <CircularSkillProgress skill="90% Team Work" percentage={90} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillP;
