import React, { useEffect, useRef, useState } from "react";
import ReactAvatarEditor from "react-avatar-editor";
import { toast } from "sonner";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button.tsx";
import { AVATAR_SIZE } from "@/lib/config.ts";
import { formatFileSize } from "@/lib/utils.ts";

import AvatarEditor from "./avatar-editor.tsx";
import AvatarEditorOperation from "./avatar-editor-operation.tsx";
import ProfilePictureOperation from "./profile-picture-operation.tsx";

type Props = {
  open: boolean;
  onOpenChange: () => void;
};

const ProfilePicturePickerDialog = ({ open, onOpenChange }: Props) => {
  const editor = useRef<ReactAvatarEditor>(null);
  const [imageSrc, setImageSrc] = useState("");
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);

  // reset state when dialog is closed
  useEffect(() => {
    if (!open) {
      setImageSrc("");
      setScale(1);
      setRotate(0);
    }
  }, [open]);

  const handleTakePhoto = () => {
    // TODO
    console.log("Take photo");
  };

  const handleAddPhoto = (selectedFile: File | null) => {
    if (selectedFile) {
      if (selectedFile.size > AVATAR_SIZE) {
        toast.error(
          `Please upload a file less than ${formatFileSize(AVATAR_SIZE)}`,
        );
        return;
      }

      // 读取文件并将其以Base64形式呈现
      const reader = new FileReader();
      reader.onload = function (readerEvent) {
        const base64String = readerEvent.target?.result as string;
        setImageSrc(base64String ?? "");
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSave = () => {
    console.log("Save");
    // const img = editor.current?.getImageScaledToCanvas().toDataURL();
    // console.log(img);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile picture</DialogTitle>
          <DialogDescription>
            A picture helps people recognize you and lets you know when you’re
            signed in to your account
          </DialogDescription>
        </DialogHeader>
        <div className="py-5 flex flex-col items-center gap-5">
          {imageSrc ? (
            <>
              <AvatarEditor
                ref={editor}
                imageSrc={imageSrc}
                scale={scale}
                rotate={rotate}
              />
              <AvatarEditorOperation
                className="xl:px-20"
                scale={scale}
                rotate={rotate}
                onScaleChange={(v) => setScale(v)}
                onRotateChange={(v) => setRotate(v)}
              />
            </>
          ) : (
            <ProfilePictureOperation
              onAddPhoto={handleAddPhoto}
              onTakePhoto={handleTakePhoto}
            />
          )}
        </div>
        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          {imageSrc && (
            <Button variant="active" onClick={handleSave}>
              Save
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfilePicturePickerDialog;
