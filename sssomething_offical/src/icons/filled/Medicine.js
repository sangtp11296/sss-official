import * as React from "react";

function SvgMedicine(props) {
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
        d="M6.72 7H16.8V4a1 1 0 00-1-1H7.72a1 1 0 00-1 1v3z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8 19v-2.64h-5.76v-1h5.76v-4.04h-5.76v-1h5.76V8H6.72v11a1 1 0 001 1h8.08a1 1 0 001-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMedicine;
