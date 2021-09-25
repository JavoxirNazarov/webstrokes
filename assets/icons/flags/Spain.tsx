import * as React from "react";

function SpainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M0 10c0 1.223.22 2.395.622 3.478l9.378.87 9.378-.87A9.977 9.977 0 0020 10c0-1.223-.22-2.395-.622-3.478L10 5.652l-9.378.87A9.979 9.979 0 000 10z"
          fill="#FFDA44"
        />
        <path
          d="M19.378 6.522a10.004 10.004 0 00-18.756 0h18.756zM.622 13.479a10.004 10.004 0 0018.756 0H.622z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SpainIcon;
