import React from "react";

const RotateIcon = ({ size = "24", fill = "none", ...other }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="lucide"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...other}
    >
      <rect
        x="7"
        y="10"
        width="16"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        // d="M9.333 5.333h-2A3.334 3.334 0 0 0 4 8.667v2"
        d="M9 3.333h-2A3.334 3.334 0 0 0 3 6.667v3"
        stroke="currentColor"
        strokeLinecap="round"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m9.334 4.667 2-1.334-2-1.333v2.667Z"
        fill={fill}
        stroke="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.175 15.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
        fill={fill}
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.55 17.975a2.475 2.475 0 1 0-4.95 0c0 1.367 4.95 1.367 4.95 0Z"
        fill={fill}
      />
    </svg>
  );
};
export default React.memo(RotateIcon);
