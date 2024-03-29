import React, { useState } from "react";
import { Pencil } from "lucide-react";

import UnselectedProfilePicture from "@/assets/unselected-profile-picture.png";
import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx";
import { cn, formatFileSize } from "@/lib/utils.ts";
import { iconClasses } from "@/routes/sidebar.tsx";
import ProfilePicturePickerDialog from "@/app/dashboard/account/general/profile-picture/profile-picture-picker-dialog.tsx";
import { AVATAR_SIZE } from "@/lib/config.ts";

const EditProfilePicture = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row items-center gap-5">
      <Avatar className="relative h-24 w-24 select-none">
        <AvatarImage src={UnselectedProfilePicture} />
        <div
          className="cursor-pointer absolute left-0 top-0 w-full h-full bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center"
          onClick={() => setOpen(true)}
        >
          <Pencil className={cn(iconClasses, "text-white")} />
        </div>
      </Avatar>
      <div className="">
        <p className="text-xl font-bold">Profile Picture</p>
        <p className="text-sm text-muted-foreground">
          {`Supports PNGs, JPEGs and GIFs under ${formatFileSize(AVATAR_SIZE)}`}
        </p>
      </div>

      <ProfilePicturePickerDialog
        open={open}
        onOpenChange={() => setOpen(!open)}
      />
    </div>
  );
};

export default EditProfilePicture;
