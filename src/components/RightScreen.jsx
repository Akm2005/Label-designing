import React from 'react';

const RightScreen = ({ selectedSection }) => {
  // if (!selectedSection) return null; // Don't show anything if no section is selected

  return (
    <div className="fixed top-10 right-0 bg-[#4C4C4C] p-6 w-60 h-screen shadow-md">
      <h1 className="text-2xl font-bold text-white">Right Screen</h1>
      <p className="text-white">This is the additional content on the right for {selectedSection}.</p>
    </div>
  );
};

export default RightScreen;
