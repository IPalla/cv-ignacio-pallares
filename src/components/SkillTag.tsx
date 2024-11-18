import React from 'react';

interface SkillTagProps {
  name: string;
  variant?: 'blue' | 'green';
}

export function SkillTag({ name, variant = 'blue' }: SkillTagProps) {
  const colors = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
  };

  return (
    <span className={`${colors[variant]} px-3 py-1 rounded-full text-sm`}>
      {name}
    </span>
  );
}