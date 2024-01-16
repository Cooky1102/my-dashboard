import { PropsWithChildren } from "react";
import { Link, useRouteError } from "react-router-dom";

import { Button } from "@/components/ui/button.tsx";

type ErrorPageProps = {
  title: string;
  description: string;
};

/*
 * error base container
 * */
const ErrorBase = ({
  children,
  title,
  description,
}: PropsWithChildren<ErrorPageProps>) => {
  const error = useRouteError();

  return (
    <div className="h-full px-10 flex flex-col items-center justify-center gap-10">
      {children}
      <div className="space-y-6">
        <p className="text-4xl font-bold">{title}</p>

        <p className="text-2xl">{description}</p>

        {!!error && (
          <p>
            {/*@ts-expect-error this is unknown type*/}
            <i>{error?.statusText || error?.message}</i>
          </p>
        )}
      </div>

      <Button variant="active" size="xl" className="font-bold" asChild>
        <Link to="/dashboard">Back to Home</Link>
      </Button>
    </div>
  );
};

export default ErrorBase;
