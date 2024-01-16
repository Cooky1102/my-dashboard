import { Link, useRouteError } from "react-router-dom";

import { Button } from "@/components/ui/button.tsx";

/*
 *  client error
 * */
const GlobalErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="h-full flex flex-col items-center justify-center gap-20">
      <div className="space-y-10">
        <p className="text-4xl font-bold">Oops!</p>

        <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
        <p>
          {/*@ts-expect-error this is unknown type*/}
          <i>{error?.statusText || error?.message}</i>
        </p>
      </div>

      <Button variant="active" size="xl" className="font-bold" asChild>
        <Link to="/dashboard">Back to Home</Link>
      </Button>
    </div>
  );
};

export default GlobalErrorPage;
