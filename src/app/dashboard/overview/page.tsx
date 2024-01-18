// import { useTranslation } from "react-i18next";
import { ActivityIcon, CreditCardIcon, DollarSignIcon, UsersRoundIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RecentSales } from "@/app/dashboard/overview/recent-sales.tsx";
import Overview from "@/app/dashboard/overview/overview.tsx";

const OverviewPage = () => {
  // const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <div className="mr-3 p-1 rounded bg-yellow-300">
              <DollarSignIcon className="h-4 w-4 text-yellow-800" />
            </div>
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <div className="mr-3 p-1 rounded bg-lime-300">
              <UsersRoundIcon className="h-4 w-4 text-lime-800" />
            </div>
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <div className="mr-3 p-1 rounded bg-blue-300">
              <CreditCardIcon className="h-4 w-4 text-blue-800" />
            </div>
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <div className="mr-3 p-1 rounded bg-rose-300">
              <ActivityIcon className="h-4 w-4 text-rose-800" />
            </div>
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 grid-cols-1 xl:grid-cols-7">
        <Card className="grid-cols-1 xl:col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-96">
            <Overview />
          </CardContent>
        </Card>
        <Card className="grid-cols-1 xl:col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewPage;
