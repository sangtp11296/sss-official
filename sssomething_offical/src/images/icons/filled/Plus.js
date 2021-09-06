import * as React from "react";

function SvgPlus(props) {
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
        d="M20 12.47H4v-1h16v1z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.53 20V4h1v16h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlus;
