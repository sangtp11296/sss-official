import * as React from "react";

function SvgTechnology(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={4.5}
        y={4.5}
        width={15}
        height={9.667}
        rx={0.5}
        stroke="currentColor"
      />
      <path
        d="M6.008 18.315a.5.5 0 01.389-.185h11.206a.5.5 0 01.389.185l.3.37a.5.5 0 01-.389.815H6.097a.5.5 0 01-.389-.815l.3-.37z"
        stroke="currentColor"
      />
      <path
        d="M19.36 12.296H4.64M10.4 14.667v.592l-.64 1.186h4.48l-.64-1.186v-.592"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgTechnology;
