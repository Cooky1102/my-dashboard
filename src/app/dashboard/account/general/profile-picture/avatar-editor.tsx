import React, { forwardRef } from "react";
import ReactAvatarEditor from "react-avatar-editor";

type Props = {
  imageSrc: string | File;
  scale: number;
  rotate: number;
};

const AvatarEditor = forwardRef<ReactAvatarEditor, Props>(
  ({ imageSrc, scale, rotate }, ref) => {
    // const logCallback = (e: string) => {
    //   console.log("callback", e);
    // };

    return (
      <ReactAvatarEditor
        ref={ref}
        width={200}
        height={200}
        borderRadius={100}
        scale={scale}
        rotate={rotate}
        image={imageSrc}
        className="rounded-2xl"
        // onLoadFailure={logCallback.bind(this, "onLoadFailed")}
        // onLoadSuccess={logCallback.bind(this, "onLoadSuccess")}
        // onImageReady={logCallback.bind(this, "onImageReady")}
      />
    );
  },
);

export default AvatarEditor;
