import * as React from "react";

function SvgDirection(props) {
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
        d="M4 4l6.857 16 2.286-6.857L20 10.857 4 4z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgDirection;
