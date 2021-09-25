import * as React from "react";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.334 2.334a5 5 0 100 10 5 5 0 000-10zm-6.667 5A6.667 6.667 0 1112.6 11.422l4.49 4.49a.833.833 0 01-1.179 1.178l-4.49-4.49A6.667 6.667 0 01.667 7.333z"
        fill={props.fill || "#737473"}
      />
    </svg>
  );
}

export default SearchIcon;
