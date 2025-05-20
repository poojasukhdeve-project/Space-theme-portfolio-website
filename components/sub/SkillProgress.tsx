import React from 'react';

interface SkillProgressProps {
  skill: string;
  percentage: number;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ skill, percentage }) => {
  return (
    <div className="skill-progress-container">
      <div className="skill-name">{skill}</div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
}

export default SkillProgress;
