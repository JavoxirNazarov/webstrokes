import React from "react";

export default function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 2a8 8 0 110 16 8 8 0 010-16zm5 3L8.176 8.176 5 15l6.824-3.176L15 5zm-5 3.9c.61 0 1.1.49 1.1 1.1 0 .61-.49 1.1-1.1 1.1-.61 0-1.1-.49-1.1-1.1 0-.61.49-1.1 1.1-1.1z"
        fill="#E85D04"
      />
    </svg>
  );
}
