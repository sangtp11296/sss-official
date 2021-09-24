import * as React from "react";

function SvgFolder(props) {
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
        d="M5.6 5A1.6 1.6 0 004 6.6v10.667a1.6 1.6 0 001.6 1.6h12.8a1.6 1.6 0 001.6-1.6V8.732a1.6 1.6 0 00-1.6-1.6h-6.18L10.089 5H5.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFolder;
