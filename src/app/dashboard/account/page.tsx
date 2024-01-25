import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import General from "@/app/dashboard/account/general/general.tsx";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const AccountPage = () => {
  return (
    <Tabs defaultValue="general" className="space-y-6">
      <ScrollArea>
        <TabsList className="p-2 h-12">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <TabsContent value="general">
        <General />
      </TabsContent>
      <TabsContent value="billing">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default AccountPage;
