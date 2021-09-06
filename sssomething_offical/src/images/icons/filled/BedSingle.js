import * as React from "react";

function SvgBedSingle(props) {
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
        d="M4 20h1.067v-4.267h13.866V20H20V8.267h-1.067v3.2H5.067V4H4v16z"
        fill="currentColor"
      />
      <path d="M10.4 10.4H6.133V9.333H10.4V10.4z" fill="currentColor" />
    </svg>
  );
}

export default SvgBedSingle;
