import React, { useState } from 'react';
import { Type, Bold, Underline, Italic, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addText, updateTextColor, updateTextfontStyle, updateTextfontSize, updateTextfontfontFamily } from '../../slice/textslice';
import { v4 as uuidv4 } from 'uuid';
import { HexColorPicker } from "react-colorful";
import Select from 'react-select'; // Import react-select

const Designs = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.textSlice);
  const selected = useSelector((state) => state.selected);

  const [showColorPicker, setShowColorPicker] = useState(false);

  const fontFamilyOptions = [
    { value: 'Arial', label: 'Arial' },
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'Times New Roman', label: 'Times New Roman' },
    { value: 'Courier New', label: 'Courier New' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Verdana', label: 'Verdana' },
    { value: 'Comic Sans MS', label: 'Comic Sans MS' }
  ];

  const fontSizeOptions = [
    { value: 12, label: '12' },
    { value: 14, label: '14' },
    { value: 16, label: '16' },
    { value: 18, label: '18' },
    { value: 20, label: '20' },
    { value: 24, label: '24' },
    { value: 28, label: '28' },
    { value: 32, label: '32' },
    { value: 36, label: '36' }
  ];

  const handleAddText = (text = 'New Text') => {
    const uniqueId = `${uuidv4()}txt`;
    const randomX = Math.floor(Math.random() * 500);
    const randomY = Math.floor(Math.random() * 400);

    const newText = {
      id: uniqueId,
      text,
      fill: '#80eb34',
      fontSize: 26,
      fontFamily: 'Arial',
      fontStyle: 'normal',
      x: randomX,
      y: randomY,
    };

    dispatch(addText(newText));
  };

  const handleCustomText = () => {
    const textInput = prompt("Enter custom text:");
    if (textInput) {
      handleAddText(textInput);
    }
  };

  const handleFontFamilyChange = (selectedOption) => {
    const newFontFamily = selectedOption.value;
    if (selected) {
      dispatch(updateTextfontfontFamily({ id: selected.id, fontFamily: newFontFamily }));
    }
  };

  const handleFontSizeChange = (selectedOption) => {
    const newFontSize = selectedOption.value;
    if (selected) {
      dispatch(updateTextfontSize({ id: selected.id, fontSize: newFontSize }));
    }
  };

  const handleFontStyleChange = (style) => {
    if (selected) {
      const newFontStyle = selected.fontStyle === style ? 'normal' : style;
      dispatch(updateTextfontStyle({ id: selected.id, fontStyle: newFontStyle }));
    }
  };

  return (
    <div className="bg-[#6C6C6C] pt-6 px-4 w-full max-w-sm rounded-lg space-y-4">
      {/* Default Add Text Button */}
      <button
        onClick={() => handleAddText()}
        className="w-full bg-gray-100 rounded-full py-2 px-4 flex items-center justify-between text-gray-800 shadow-md hover:bg-gray-200 transition"
      >
        <div className="flex items-center">
          <span className="font-bold mr-2">ABCD</span>
          <span>Add Text Box</span>
        </div>
      </button>

      {/* Custom Add Text Button */}
      <button
        onClick={handleCustomText}
        className="w-full bg-gray-100 rounded-full py-2 px-4 flex items-center justify-between text-gray-800 shadow-md hover:bg-gray-200 transition"
      >
        <div className="flex items-center">
          <span className="font-bold mr-2">✍️</span>
          <span>Add Custom Text</span>
        </div>
      </button>

      {/* Font Family Dropdown with react-select */}
      <Select
        options={fontFamilyOptions}
        className="mb-2 shadow-md text-black"
        isDisabled={!selected}
        onChange={handleFontFamilyChange}
        value={fontFamilyOptions.find(option => option.value === (selected ? selected.fontFamily : 'Arial'))}
      />

      {/* Font Size Dropdown with react-select */}
      <Select
        options={fontSizeOptions}
        className="shadow-md text-black"
        isDisabled={!selected}
        onChange={handleFontSizeChange}
        value={fontSizeOptions.find(option => option.value === (selected ? selected.fontSize : 16))}
      />

      {/* Font Style (Bold, Italic, Underline) */}
      <div className="flex space-x-2">
        <button
          className={`bg-gray-100 rounded p-2 shadow-md hover:bg-gray-200 transition ${!selected ? 'opacity-50 cursor-not-allowed' : selected.fontStyle === 'bold' ? 'bg-gray-300' : ''}`}
          onClick={() => handleFontStyleChange('bold')}
          disabled={!selected}
        >
          <Bold size={18} color='black' />
        </button>
        <button
          className={`bg-gray-100 rounded p-2 shadow-md hover:bg-gray-200 transition ${!selected ? 'opacity-50 cursor-not-allowed' : selected.fontStyle === 'underline' ? 'bg-gray-300' : ''}`}
          onClick={() => handleFontStyleChange('underline')}
          disabled={!selected}
        >
          <Underline size={18} color='black' />
        </button>
        <button
          className={`bg-gray-100 rounded p-2 shadow-md hover:bg-gray-200 transition ${!selected ? 'opacity-50 cursor-not-allowed' : selected.fontStyle === 'italic' ? 'bg-gray-300' : ''}`}
          onClick={() => handleFontStyleChange('italic')}
          disabled={!selected}
        >
          <Italic size={18} color='black' />
        </button>
        <button
          className={`bg-gray-100 rounded p-2 flex-grow shadow-md hover:bg-gray-200 transition ${!selected ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => setShowColorPicker(!showColorPicker)}
          disabled={!selected}
        >
          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: selected ? selected.fill : '#80eb34' }} />
        </button>
      </div>

      {/* Color Picker */}
      {showColorPicker && (
        <div className="absolute z-50 color-picker-container">
          <HexColorPicker
            color={selected ? selected.fill : '#80eb34'}
            onChange={(newColor) => dispatch(updateTextColor({ id: selected.id, color: newColor }))}
          />
        </div>
      )}
      <div>
        <span className="text-sm text-gray-400">Alignment & Position:</span>
        <div className="flex space-x-2 mt-1">
          <button
            className={`bg-gray-100 rounded p-2 flex-grow shadow-md hover:bg-gray-200 transition ${!selected ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!selected}
          >
            <AlignLeft size={18} color='black' />
          </button>
          <button
            className={`bg-gray-100 rounded p-2 flex-grow shadow-md hover:bg-gray-200 transition ${!selected ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!selected}
          >
            <AlignCenter size={18} color='black' />
          </button>
          <button
            className={`bg-gray-100 rounded p-2 flex-grow shadow-md hover:bg-gray-200 transition ${!selected ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!selected}
          >
            <AlignRight size={18} color='black' />
          </button>
        </div>
      </div>

      <div>
        <span className="text-sm text-gray-400">Line Spacing:</span>
        <input
          type="range"
          className={`w-full mt-1 bg-gray-300 ${!selected ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!selected}
        />
      </div>

      <div>
        <span className="text-sm text-gray-400">Transparency:</span>
        <input
          type="range"
          className={`w-full mt-1 bg-gray-300 ${!selected ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!selected}
        />
      </div>

    </div>
  );
};

export default Designs;
