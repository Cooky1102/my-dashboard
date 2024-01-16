import React, { PropsWithChildren } from "react";

import { cn } from "@/lib/utils.ts";

const Card = ({
  children,
  className,
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return <div className={cn("border rounded p-4", className)}>{children}</div>;
};

export default Card;
