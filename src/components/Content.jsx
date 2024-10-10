import { useEffect } from 'react';

const Content = ({ selectedSection, onClose }) => {
  
  if (!selectedSection) return null;

  return (
    <div className="content-container fixed top-10 left-20 bg-[#6C6C6C] p-6 w-1/5 h-screen shadow-md">
      <h1 className="text-2xl font-bold"> {selectedSection}</h1>
    </div>
  );
};

export default Content;
