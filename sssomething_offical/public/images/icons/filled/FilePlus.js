import * as React from "react";

function SvgFilePlus(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5.6A1.6 1.6 0 016.6 4h8.754l3.513 3.512V18.4a1.6 1.6 0 01-1.6 1.6H6.6A1.6 1.6 0 015 18.4V5.6zm6.4 9.067v-2.134H9.267v-1.066H11.4V9.333h1.067v2.134H14.6v1.066h-2.133v2.134H11.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFilePlus;
