import * as React from "react";

function SvgFileMinus(props) {
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
        d="M5 5.6A1.6 1.6 0 016.6 4h8.754l3.513 3.512V18.4a1.6 1.6 0 01-1.6 1.6H6.6A1.6 1.6 0 015 18.4V5.6zm4.267 6.933H14.6v-1.066H9.267v1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFileMinus;
