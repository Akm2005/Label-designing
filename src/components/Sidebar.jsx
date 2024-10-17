import React from 'react';
import { FolderDot, Pencil, Image, QrCode, Import,Shapes } from 'lucide-react';

const Sidebar = ({ selectedSection, onSectionSelect }) => {
  const isActive = (section) => selectedSection === section;

  return (
    <div className="bg-[#989898] z-0 w-20 h-screen fixed top-10 overflow-auto left-0 p-4 flex flex-col justify-start space-y-4 sidebar">
      <ul className="flex flex-col items-center">
        <li
          onClick={() => onSectionSelect('project')}
          className={`flex p-4 flex-col items-center text-white cursor-pointer ${
            isActive('project') ? 'bg-[#6C6C6C]' : ''
          }`}
        >
          <FolderDot size={25} className="mb-1 text-white" />
          <span className="text-white">Project</span>
        </li>
        <li
          onClick={() => onSectionSelect('design')}
          className={`flex p-4 flex-col items-center text-white cursor-pointer ${
            isActive('design') ? 'bg-[#6C6C6C]' : ''
          }`}
        >
          <Pencil size={25} className="mb-1 text-white" />
          <span className="text-white">Design</span>
        </li>
        <li
          onClick={() => onSectionSelect('image')}
          className={`flex p-4 flex-col items-center text-white cursor-pointer ${
            isActive('image') ? 'bg-[#6C6C6C]' : ''
          }`}
        >
          <Image size={25} className="mb-1 text-white" />
          <span className="text-white">Images</span>
        </li>
        <li
          onClick={() => onSectionSelect('Shapes')}
          className={`flex p-4 flex-col items-center text-white cursor-pointer ${
            isActive('Shapes') ? 'bg-[#6C6C6C]' : ''
          }`}
        >
          <Shapes size={25} className="mb-1 text-white" />
          <span className="text-white">Shapes</span>
        </li>
        <li
          onClick={() => onSectionSelect('BarCode')}
          className={`flex p-4 flex-col items-center text-white cursor-pointer ${
            isActive('BarCode') ? 'bg-[#6C6C6C]' : ''
          }`}
        >
          <QrCode size={25} className="mb-1 text-white" />
          <span className="text-white">BarCode</span>
        </li>
        <li
          onClick={() => onSectionSelect('import')}
          className={`flex p-4 flex-col items-center text-white cursor-pointer ${
            isActive('import') ? 'bg-[#6C6C6C]' : ''
          }`}
        >
          <Import size={25} className="mb-1 text-white" />
          <span className="text-white">Import</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
