import * as React from "react";

function SvgScan(props) {
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
        d="M6.667 5.067a1.6 1.6 0 00-1.6 1.6v2.666H4V6.667A2.667 2.667 0 016.667 4h2.666v1.067H6.667zm10.666 0h-2.666V4h2.666A2.667 2.667 0 0120 6.667v2.666h-1.067V6.667a1.6 1.6 0 00-1.6-1.6zM4 17.333v-2.666h1.067v2.666a1.6 1.6 0 001.6 1.6h2.666V20H6.667A2.667 2.667 0 014 17.333zm14.933 0v-2.666H20v2.666A2.667 2.667 0 0117.333 20h-2.666v-1.067h2.666a1.6 1.6 0 001.6-1.6z"
        fill="currentColor"
      />
      <path d="M17.866 12.534H6.133v-1.067h11.733v1.066z" fill="currentColor" />
    </svg>
  );
}

export default SvgScan;
