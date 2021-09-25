import * as React from "react";

function KoreaIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
          fill="#F0F0F0"
        />
        <path
          d="M10 0a9.977 9.977 0 00-7.58 3.478h15.16A9.977 9.977 0 0010 0zM17.58 16.521H2.419A9.977 9.977 0 009.999 20a9.977 9.977 0 007.581-3.479z"
          fill="#0052B4"
        />
        <path
          d="M18.532 4.782H1.468A9.953 9.953 0 000 10c0 1.912.537 3.698 1.468 5.217h17.064A9.953 9.953 0 0020 10a9.953 9.953 0 00-1.468-5.218z"
          fill="#D80027"
        />
        <path
          d="M6.152 13.848a3.848 3.848 0 100-7.696 3.848 3.848 0 000 7.696z"
          fill="#F0F0F0"
        />
        <path
          d="M6.152 6.152l.863 2.657h2.799l-2.265 1.643.87 2.665-2.267-1.65-2.264 1.647.867-2.662-2.263-1.643h2.796l.864-2.657z"
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

export default KoreaIcon;
