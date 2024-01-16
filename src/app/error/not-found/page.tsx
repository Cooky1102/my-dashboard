import { Link } from "react-router-dom";

import NotFoundIcon from "@/components/svg-react/not-found-icon.tsx";
import { Button } from "@/components/ui/button.tsx";

const NotFoundPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-10">
      {/*  TODO */}
      <NotFoundIcon className="bg-white" />

      <div className="space-y-6">
        <p className="text-4xl font-bold">Page not found</p>

        <p className="text-2xl">
          We’re sorry, the page you’re looking for doesn’t exist.
        </p>
      </div>

      <Button variant="active" size="xl" className="font-bold" asChild>
        <Link to="/dashboard">Back to Home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
