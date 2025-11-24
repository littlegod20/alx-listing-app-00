import React from 'react';

interface PillProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
        isActive
          ? 'bg-gray-900 text-white'
          : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-900'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;

