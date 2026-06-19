import React from 'react';

const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mb-4"></div>
        <h2 className="text-xl font-bold text-gray-900">VisaVaani</h2>
        <p className="text-gray-500 text-sm mt-1">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
