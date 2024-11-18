import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export function ExperienceItem({ title, company, period, achievements }: ExperienceItemProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-medium text-gray-900">{title}</h4>
        <span className="text-blue-600 font-medium">{period}</span>
      </div>
      <h5 className="text-gray-600 mb-2">{company}</h5>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}