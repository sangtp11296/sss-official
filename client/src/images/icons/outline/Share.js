import * as React from "react";

function SvgShare(props) {
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
        d="M8.374 11.805h4.575m2.859-4.002l-2.86 3.997 2.86 4.008m4.002-9.722a2.287 2.287 0 01-4.574 0 2.287 2.287 0 014.574 0zm0 11.428a2.287 2.287 0 01-4.574 0 2.287 2.287 0 014.574 0zM8.374 11.8a2.287 2.287 0 01-4.574 0 2.287 2.287 0 014.574 0z"
        stroke="currentColor"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default SvgShare;
