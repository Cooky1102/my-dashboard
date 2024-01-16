import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button.tsx";

const UnAuthorizedErrorPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-20">
      <div className="space-y-10">
        <p className="text-4xl font-bold">Unauthorized</p>

        <p className="text-2xl">Access is allowed only for registered users.</p>
      </div>

      <Button variant="active" size="xl" className="font-bold" asChild>
        <Link to="/dashboard">Back to Home</Link>
      </Button>
    </div>
  );
};

export default UnAuthorizedErrorPage;
