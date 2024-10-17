import React from 'react';
import { Stage, Layer, Rect, Circle, Text } from 'react-konva';

const Main = () => {
  const stageWidth = window.innerWidth / 2;
  const stageHeight = window.innerHeight / 2;
  const padding = 10;

  return (
    <Stage width={stageWidth} height={stageHeight} className="rounded-lg bg-white self-center">
      <Layer>
        <Text
          draggable
          text="Some text on canvas"
          fontSize={15}
          dragBoundFunc={(pos) => {
            const newX = Math.max(padding, Math.min(pos.x, stageWidth - padding - 100)); // Text width as 100
            const newY = Math.max(padding, Math.min(pos.y, stageHeight - padding - 15)); // Text height as 15
            return { x: newX, y: newY };
          }}
        />
        <Rect
          x={20}
          y={50}
          width={100}
          height={100}
          fill="red"
          draggable
          shadowBlur={10}
          dragBoundFunc={(pos) => {
            const newX = Math.max(padding, Math.min(pos.x, stageWidth - padding - 100)); // 100 is the width of the rect
            const newY = Math.max(padding, Math.min(pos.y, stageHeight - padding - 100)); // 100 is the height of the rect
            return { x: newX, y: newY };
          }}
        />
        <Circle
          draggable
          x={200}
          y={100}
          radius={50}
          fill="green"
          dragBoundFunc={(pos) => {
            const newX = Math.max(padding + 50, Math.min(pos.x, stageWidth - padding - 50)); // Circle radius 50
            const newY = Math.max(padding + 50, Math.min(pos.y, stageHeight - padding - 50)); // Circle radius 50
            return { x: newX, y: newY };
          }}
        />
      </Layer>
    </Stage>
  );
};

export default Main;
