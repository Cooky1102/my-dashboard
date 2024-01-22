import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import EditProfilePicture from "@/app/dashboard/account/general/basic-detail/edit-profile-picture.tsx";

const General = () => {
  return (
    <div className="scroll-py-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic details</CardTitle>
        </CardHeader>
        <CardContent>
          <EditProfilePicture />
        </CardContent>
      </Card>
    </div>
  );
};

export default General;
