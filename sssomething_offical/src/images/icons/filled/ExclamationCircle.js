import * as React from "react";

function SvgExclamationCircle(props) {
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
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm7.467.533V8.267h1.066v4.266h-1.066zm1.066 2.134v1.077h-1.066v-1.077h1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgExclamationCircle;
