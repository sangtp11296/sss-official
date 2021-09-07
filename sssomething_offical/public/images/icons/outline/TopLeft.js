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
        d="M5 4v-.5a.5.5 0 00-.5.5H5zm0 .5h6.875v-1H5v1zM4.5 4v6.875h1V4h-1zm.146.354l15 15 .708-.707-15-15-.708.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTopLeft;
