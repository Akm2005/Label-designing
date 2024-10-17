import React, { useState } from 'react';

const RightScreen = () => {
  const [activeSection, setActiveSection] = useState('layer'); // Set 'layer' as the default active section

  const handleToggle = (section) => {
    setActiveSection(activeSection === section ? activeSection : section); // Toggle section content visibility
  };

  return (
    <div className="fixed top-10 right-0 bg-[#989898] w-48 h-screen shadow-md">
      <div className="flex space-x-0">
        <div
          className={`p-6 pt-10 cursor-pointer flex-grow text-center ${activeSection === 'layer' ? 'bg-[#989898]' : 'bg-[#6C6C6C] text-white'}`}
          onClick={() => handleToggle('layer')}
        >
          Layer
        </div>
        <div
          className={`p-6 pt-10 cursor-pointer flex-grow text-center ${activeSection === 'properties' ? 'bg-[#989898]' : 'bg-[#6C6C6C] text-white'}`}
          onClick={() => handleToggle('properties')}
        >
          Properties
        </div>
      </div>

      {/* Only display content for the active section */}
      {activeSection === 'layer' && (
        <div className="text-white mb-4 p-4">
          This is the content of the layer section.
        </div>
      )}
      {activeSection === 'properties' && (
        <div className="text-white mb-4 p-4">
          This is the content of the properties section.
        </div>
      )}
    </div>
  );
};

export default RightScreen;
