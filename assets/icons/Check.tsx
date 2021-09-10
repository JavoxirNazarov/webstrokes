import * as React from "react";

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={13}
      height={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M.32 5.815l4.233 4.182 7.449-7.41L10.388.98 4.553 6.792l-2.63-2.585L.32 5.815z"
        fill="#fff"
      />
    </svg>
  );
}

export default CheckIcon;
