import React from "react";
import { ZoomIn, ZoomOut } from "lucide-react";

import { Button } from "@/components/ui/button.tsx";
import { Slider } from "@/components/ui/slider.tsx";
import RotateIcon from "@/components/svg-react/rotate.tsx";

type Props = {
  scale: number;
  rotate: number;
  onScaleChange: (scale: number) => void;
  onRotateChange: (rotate: number) => void;
};

const SCALE_MIN = 1;
const SCALE_MAX = 4;

//  todo add classname   修改黑色那圈
const AvatarEditorOperation = ({
  scale,
  rotate,
  onScaleChange,
  onRotateChange,
}: Props) => {
  const handleScale = (value: number[]) => {
    onScaleChange(value[0]);
  };

  const handleZoomIn = () => {
    if (scale === SCALE_MAX) return;
    const newScale = (scale + 0.1).toFixed(2);
    onScaleChange(Math.min(Number(newScale), SCALE_MAX));
  };

  const handleZoomOut = () => {
    if (scale === SCALE_MIN) return;
    const newScale = (scale - 0.1).toFixed(2);
    onScaleChange(Math.max(Number(newScale), SCALE_MIN));
  };

  const rotateRight = () => {
    onRotateChange((rotate + 90) % 360);
  };

  return (
    <div className="w-full flex flex-row items-center gap-3">
      <Button
        size="icon"
        variant="ghost"
        className="rounded-full flex-shrink-0"
        title="Zoom out"
        onClick={handleZoomOut}
      >
        <ZoomOut />
      </Button>
      <Slider
        value={[scale]}
        min={SCALE_MIN}
        max={SCALE_MAX}
        step={0.01}
        onValueChange={handleScale}
      />
      <Button
        size="icon"
        variant="ghost"
        className="rounded-full flex-shrink-0"
        title="Zoom in"
        onClick={handleZoomIn}
      >
        <ZoomIn />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="rounded-full flex-shrink-0"
        title="Rotate"
        onClick={rotateRight}
      >
        <RotateIcon />
      </Button>
    </div>
  );
};

export default AvatarEditorOperation;
