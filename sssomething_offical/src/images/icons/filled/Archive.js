import * as React from "react";

function SvgArchive(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 4h16v5.333H4V4z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.067 10.4v8a1.6 1.6 0 001.6 1.6h10.666a1.6 1.6 0 001.6-1.6v-8H5.067zm9.6 3.2H9.333v-1.067h5.334V13.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgArchive;
