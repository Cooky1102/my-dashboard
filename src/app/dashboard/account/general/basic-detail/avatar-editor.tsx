import React, { useRef } from "react";
import ReactAvatarEditor from "react-avatar-editor";

type Props = {
  imageSrc: string | File;
  scale: number;
  rotate: number;
};

const AvatarEditor = ({ imageSrc, scale, rotate }: Props) => {
  const editor = useRef<ReactAvatarEditor>(null);

  const logCallback = (e: string) => {
    console.log("callback", e);
  };

  // todo
  // const img = editor.current?.getImageScaledToCanvas().toDataURL();
  // const rect = editor.current?.getCroppingRect();
  // console.log(editor.current?.getImageScaledToCanvas().toDataURL());
  // console.log(editor.current?.getCroppingRect());

  return (
    <ReactAvatarEditor
      ref={editor}
      width={200}
      height={200}
      borderRadius={100}
      scale={scale}
      rotate={rotate}
      image={imageSrc}
      className="rounded-2xl"
      onLoadFailure={logCallback.bind(this, "onLoadFailed")}
      onLoadSuccess={logCallback.bind(this, "onLoadSuccess")}
      onImageReady={logCallback.bind(this, "onImageReady")}
    />
  );
};

export default AvatarEditor;
