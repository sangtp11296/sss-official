import * as React from "react";

function SvgTopLeft(props) {
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
        d="M4.5 4a.5.5 0 01.5-.5h6.875v1H6.207l14.147 14.146-.708.708L5.5 5.207v5.668h-1V4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTopLeft;
