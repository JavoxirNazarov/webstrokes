import * as React from "react";

function LoaderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={40}
      height={40}
      className="rotating"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={20} cy={20} r={18} stroke="#000" strokeWidth={4} />
      <circle
        cx={20}
        cy={20}
        r={18}
        stroke="#fff"
        strokeOpacity={0.92}
        strokeWidth={4.1}
      />
      <path
        d="M2 20c0 9.941 8.059 18 18 18s18-8.059 18-18S29.941 2 20 2"
        stroke="#000"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default LoaderIcon;
