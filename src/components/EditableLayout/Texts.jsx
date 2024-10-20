import React, { useEffect } from 'react';
import { Text, Transformer } from 'react-konva';
import { useDispatch } from 'react-redux';
import {
  updateTextX,
  updateTextY,
  updateTexttext,
  updateTextfontSize,
  updateTextfontStyle,
  updateTextfontfontFamily,
} from '../../slice/textslice';

const Texts = ({ shapeProps, isSelected, onSelect, onChange, onDoubleClick }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Text
        onClick={onSelect}
        onTap={onSelect}
        onDblClick={(e) => onDoubleClick(shapeProps, e)}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          const newX = e.target.x();
          const newY = e.target.y();
          onChange({ ...shapeProps, x: newX, y: newY });
          // Dispatching the change to Redux
          dispatch(updateTextX({ id: shapeProps.id, X: newX }));
          dispatch(updateTextY({ id: shapeProps.id, Y: newY }));
        }}
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // Reset the scale after transforming
          node.scaleX(1);
          node.scaleY(1);

          const newWidth = Math.max(5, node.width() * scaleX);
          const newHeight = Math.max(5, node.height() * scaleY);

          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: newWidth,
            height: newHeight,
          });

          // Dispatching width and height change to Redux
          dispatch(updateTexttext({ id: shapeProps.id, text: shapeProps.text })); // If you need to update text as well
          dispatch(updateTextfontSize({ id: shapeProps.id, fontSize: newHeight })); // Update with the appropriate property
          // Add any other property updates you need here
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Texts;
