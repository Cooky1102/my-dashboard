import LogoIcon from "@/components/svg-react/logo.tsx";
import React from "react";
import { cn } from "@/lib/utils.ts";
import { SYSTEM_CONFIG } from "@/lib/config.ts";

const { SYSTEM_NAME } = SYSTEM_CONFIG;

interface BrandProps extends React.HTMLAttributes<HTMLDivElement> {}

const Brand = ({ className }: BrandProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-5 font-bold text-xl",
        className,
      )}
    >
      <LogoIcon />
      <span>{SYSTEM_NAME}</span>
    </div>
  );
};

export default Brand;
