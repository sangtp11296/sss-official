import * as React from "react";

function SvgPlusCircle(props) {
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
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm7.467 3.733v-3.2h-3.2v-1.066h3.2v-3.2h1.066v3.2h3.2v1.066h-3.2v3.2h-1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPlusCircle;
