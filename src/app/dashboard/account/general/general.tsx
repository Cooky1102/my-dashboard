import React from "react";

import EditProfilePicture from "@/app/dashboard/account/general/profile-picture/edit-profile-picture.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import ProfileForm from "@/app/dashboard/account/general/profile-form.tsx";

const General = () => {
  return (
    <section className="space-y-6">
      <EditProfilePicture />
      <Separator />
      <ProfileForm />
    </section>
  );
};

export default General;
