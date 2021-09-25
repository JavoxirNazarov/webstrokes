import * as React from "react";

function FlashcardsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={54}
      height={41}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M37.556 16H6.444C3.99 16 2 17.244 2 18.778v19.444C2 39.756 3.99 41 6.444 41h31.112C40.01 41 42 39.756 42 38.222V18.778C42 17.244 40.01 16 37.556 16z"
        fill="#000"
      />
      <path
        d="M42.75 4.5h-31.5c-2.485 0-4.5 1.343-4.5 3v21c0 1.657 2.015 3 4.5 3h31.5c2.485 0 4.5-1.343 4.5-3v-21c0-1.657-2.015-3-4.5-3z"
        fill="#fff"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FlashcardsIcon;
