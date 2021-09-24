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
        d="M20 4h.5a.5.5 0 00-.5-.5V4zm0-.5h-6.875v1H20v-1zm-.5.5v6.875h1V4h-1zm.146-.353l-15 15 .708.707 15-15-.708-.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTopRight;
