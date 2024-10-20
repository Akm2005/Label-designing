import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';
import Texts from './Texts';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected, removeSelected } from '../../slice/selectedslice';

const Main = () => {
  const dispatch = useDispatch();
  const selectedId = useSelector((state) => state.selected); // Get selected ID from Redux
  console.log('selectedId',selectedId)
  const textdata = useSelector((state) => state.textSlice);
  
  const stageWidth = window.innerWidth / 2;
  const stageHeight = window.innerHeight / 2;
  const inputRef = useRef(null);
  const stageRef = useRef(null);
  const containerRef = useRef(null);
  const [editingText, setEditingText] = useState(null);
  const [selected,setselected] =  useState(null);

  const [textObjects, setTextObjects] = useState(textdata);

  useEffect(() => {
    // Sync textObjects with textdata when textdata changes
    setTextObjects(textdata);
  }, [textdata]);

  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setselected(null);
      dispatch(removeSelected()); // Reset selected ID in Redux
    }
  };

  const handleDoubleClick = (textObj, e) => {
    const textNode = e.target;
    const stage = stageRef.current;
    const stageBox = stage.container().getBoundingClientRect();
    const containerBox = containerRef.current.getBoundingClientRect();

    const textPosition = textNode.getAbsolutePosition();
    const textWidth = textNode.width();
    const textHeight = textNode.height();

    setEditingText({
      ...textObj,
      absoluteX: textPosition.x + stageBox.left - containerBox.left,
      absoluteY: textPosition.y + stageBox.top - containerBox.top,
      width: textWidth,
      height: textHeight,
    });

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.value = textObj.text;
        inputRef.current.select();
      }
    }, 0);
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setTextObjects((prevState) =>
      prevState.map((textObj) =>
        textObj.id === editingText.id ? { ...textObj, text: newText } : textObj
      )
    );
  };

  const handleInputBlur = () => {
    setEditingText(null);
  };

  useEffect(() => {
    if (editingText && inputRef.current) {
      inputRef.current.style.position = 'absolute';
      inputRef.current.style.top = `${editingText.absoluteY}px`;
      inputRef.current.style.left = `${editingText.absoluteX}px`;
      inputRef.current.style.width = `auto`;
      inputRef.current.style.height = `${editingText.height}px`;
      inputRef.current.style.fontSize = `${editingText.fontSize}px`;
      inputRef.current.style.lineHeight = `${editingText.height}px`;
      inputRef.current.style.padding = '0';
      inputRef.current.style.margin = '0';
      inputRef.current.style.border = 'none';
      inputRef.current.style.background = 'rgba(255, 255, 255, 0.8)';
      inputRef.current.style.outline = 'none';
      inputRef.current.style.color = 'black';
      inputRef.current.style.fontFamily = 'Arial, sans-serif';
    }
  }, [editingText]);

  return (
    <div ref={containerRef} className="relative">
      <Stage
        ref={stageRef}
        width={stageWidth}
        height={stageHeight}
        className="rounded-lg bg-white self-center"
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          {textObjects.map((rect, i) => (
            <Texts
              key={i}
              shapeProps={rect}
              isSelected={rect.id === selected}
              onSelect={() =>{dispatch(setSelected(rect));setselected(rect.id)} } // Dispatch selected ID
              onChange={(newAttrs) => {
                const updatedTexts = [...textObjects];
                updatedTexts[i] = newAttrs;
                setTextObjects(updatedTexts);
              }}
              onDoubleClick={handleDoubleClick} // Pass double-click event
            />
          ))}
        </Layer>
      </Stage>

      {editingText && (
        <input
          ref={inputRef}
          type="text"
          onChange={handleTextChange}
          onBlur={handleInputBlur}
        />
      )}
    </div>
  );
};

export default Main;
