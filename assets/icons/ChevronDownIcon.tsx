import * as React from "react";

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={14}
      height={8}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1l6 6 6-6"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChevronDownIcon;
