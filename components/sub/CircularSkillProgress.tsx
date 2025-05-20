import React from 'react';
import './CircularSkillProgress.css'; 

interface CircularSkillProgress {
    skill: string;
    percentage: number;
  }

const CircularSkillProgress: React.FC<CircularSkillProgress> = ({ skill, percentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;

  return (
    <div className="skill-container">
      <svg className="circular-chart" width="120" height="120">
        <circle
          className="circular-bg"
          stroke="lightgrey"
          cx="60"
          cy="60"
          r="50"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          className="circle-bar"
          stroke="blue"
          cx="60"
          cy="60"
          r="50"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
        />
        <text
          className='percentage-circle'
          x="60"
          y="65"
          textAnchor="middle"
          fill="black"
          fontSize="20"
        >{`${percentage}%`}</text>
      </svg>
      <div className="skill-label">{skill}</div>
    </div>
  );
};

export default CircularSkillProgress;
