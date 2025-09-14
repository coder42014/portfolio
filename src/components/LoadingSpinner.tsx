import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-2 border-white/20"></div>
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-2 border-transparent border-t-blue-500 animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;