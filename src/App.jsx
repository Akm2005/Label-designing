import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/content/Content';
import RightScreen from './components/RightScreen'; // Import the new right screen
import LayoutMain from './components/LayoutMain';

const App = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isPortrait, setIsPortrait] = useState(true); // State to track orientation

  const handleSectionSelect = (section) => {
    setSelectedSection((prev) => (prev === section ? null : section));
  };

  const handleClose = () => {
    setSelectedSection(null);
  };

  // Function to check if device is in portrait mode
  const checkOrientation = () => {
    if (window.innerHeight > window.innerWidth) {
      setIsPortrait(true); // Portrait mode
    } else {
      setIsPortrait(false); // Landscape mode
    }
  };

  useEffect(() => {
    // Check on component mount and on window resize
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
    };
  }, []); 

  return (
    <div className="relative">
      {isPortrait && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 text-white">
          <p className="text-lg">Please rotate your phone for a better experience.</p>
        </div>
      )}

      <Header />
      <LayoutMain/>
      <Sidebar onSectionSelect={handleSectionSelect} selectedSection={selectedSection} />
      <Content selectedSection={selectedSection} onClose={handleClose} />
      <RightScreen selectedSection={selectedSection} />
    </div>
  );
};

export default App;
