import * as React from "react";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SearchIcon;
