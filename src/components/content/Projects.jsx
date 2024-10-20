import React from 'react';

const Projects = () => {
  // Define an array of shapes with type and size
  const shapes = [
    { type: 'rectangle', height: 'h-24' }, // Rectangle (with dynamic width based on parent)
    { type: 'circle', height: 'h-24 rounded-full' }, // Circle (equal width and height, rounded-full)
    { type: 'square', height: 'h-24' }, // Square (equal width and height)
    { type: 'rectangle', height: 'h-24' },
    { type: 'circle', height: 'h-24 rounded-full' },
    { type: 'square', height: 'h-24' },
    { type: 'rectangle', height: 'h-24' },
    { type: 'circle', height: 'h-24 rounded-full' },
    { type: 'square', height: 'h-24' }
  ];

  return (
    <div className="flex relative flex-col p-6 pb-11 space-y-8 max-h-screen overflow-y-auto">
      <p>Select Project</p>
      {shapes.map((shape, index) => (
        <div key={index} className="flex flex-col items-center w-full">
          {/* Shape */}
          <div className={`bg-white w-full ${shape.height} flex items-center justify-center shadow-lg`}>
            {/* Empty content inside shape */}
          </div>
          {/* Name below the shape */}
          <span className="text-white capitalize mt-2">{shape.type}</span>
        </div>
      ))}
    </div>
  );
};

export default Projects;
