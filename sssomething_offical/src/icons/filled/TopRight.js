import * as React from "react";

function SvgTopRight(props) {
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
        d="M13.125 3.5H20a.5.5 0 01.5.5v6.875h-1V5.207L5.354 19.354l-.708-.707L18.793 4.5h-5.668v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTopRight;
