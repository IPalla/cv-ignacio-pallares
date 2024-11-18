import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ title, icon, children, className = '' }: SectionProps) {
  return (
    <div className={`py-6 border-t border-gray-200 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
}