import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button.tsx";

const InternalServerErrorPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-20">
      <div className="space-y-10">
        <p className="text-4xl font-bold">Internal Server Error</p>

        <p className="text-2xl">
          We're experiencing an internal server problem. Please try again later.
        </p>
      </div>

      <Button variant="active" size="xl" className="font-bold" asChild>
        <Link to="/dashboard">Back to Home</Link>
      </Button>
    </div>
  );
};

export default InternalServerErrorPage;
