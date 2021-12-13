import * as React from "react";

function SvgMinusCircle(props) {
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
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm4.267.533h7.466v-1.066H8.267v1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMinusCircle;
