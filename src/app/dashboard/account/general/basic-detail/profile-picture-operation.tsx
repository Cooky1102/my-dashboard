import React, { useCallback, useRef } from "react";
import { Camera, Plus } from "lucide-react";
import { FileRejection, useDropzone } from "react-dropzone";

import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx";
import UnselectedProfilePicture from "@/assets/unselected-profile-picture.png";
import { useToast } from "@/components/ui/use-toast.ts";
import { cn } from "@/lib/utils.ts";

type Props = {
  onAddPhoto: (file: File | null) => void;
  onTakePhoto: () => void;
};

const ProfilePictureOperation = ({ onAddPhoto, onTakePhoto }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length !== 1) {
        toast({
          title: "Invalid file",
          description: "Please upload a single file",
        });
        return;
      }

      onAddPhoto(acceptedFiles[0]);
    },
    [toast, onAddPhoto],
  );

  const onDropRejected = useCallback(
    (fileRejections: FileRejection[]) => {
      if (fileRejections.length) {
        toast({
          title: fileRejections[0].errors[0].code,
          description: fileRejections[0].errors[0].message,
        });
        return;
      }
    },
    [toast],
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      onDropRejected,
      noClick: true,
      noKeyboard: true,
      multiple: false,
      accept: {
        "image/jpeg": [".jpg", ".jpeg"],
        "image/png": [".png"],
        "image/gif": [".gif"],
        "image/webp": [".webp"],
      },
    });

  const handleAdd = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAddPhoto(e.target.files && e.target.files[0]);
  };

  return (
    <>
      <div
        {...getRootProps()}
        className={cn(
          "w-full border rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-2 p-5 transition-colors",
          { "border-blue-500 bg-blue-500/20": isDragActive && !isDragReject },
          { "border-destructive bg-destructive/20": isDragReject },
        )}
      >
        <input {...getInputProps()} />
        <Avatar className="w-24 h-24">
          <AvatarImage src={UnselectedProfilePicture} />
        </Avatar>
        <p className="text-lg">Drag photo here</p>
      </div>
      <p className="text-sm text-muted-foreground">— or —</p>
      <div className="flex flex-row justify-center">
        <Button
          size="icon"
          variant="ghost"
          className="w-32 h-20 flex-col gap-2"
          onClick={handleAdd}
        >
          <Plus />
          <p className="text-center text-sm">Add photo</p>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="w-32 h-20 flex-col gap-2"
          onClick={onTakePhoto}
        >
          <Camera />
          <p className="text-center text-sm">Take photo</p>
        </Button>
      </div>
      <Input
        ref={inputRef}
        className="hidden"
        type="file"
        multiple={false}
        accept="image/*"
        onChange={handleFileChange}
      />
    </>
  );
};

export default ProfilePictureOperation;
