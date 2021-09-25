import * as React from "react";

function StarIcon({ active = false }: { active?: boolean }) {
  return (
    <svg
      width={17}
      height={17}
      fill={active ? "#000000" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clipPath="url(#prefix__clip0)"
        strokeWidth={1.355}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M8.184 1.355l2.094 4.242 4.683.685-3.389 3.3.8 4.662-4.188-2.203-4.187 2.203.8-4.662-3.389-3.3 4.682-.685 2.094-4.242z"
          stroke="#000"
        />
        <path
          d="M8.184 1.355l2.094 4.242 4.683.685-3.389 3.3.8 4.662-4.188-2.203-4.187 2.203.8-4.662-3.389-3.3 4.682-.685 2.094-4.242z"
          stroke={active ? "#000000" : "#fff"}
          strokeOpacity={active ? 1 : 0.72}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            transform="translate(.053)"
            d="M0 0h16.263v16.263H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default StarIcon;
