import * as React from "react";

function SvgFaceId(props) {
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
        d="M6.667 5.067a1.6 1.6 0 00-1.6 1.6v2.666H4V6.667A2.667 2.667 0 016.667 4h2.666v1.067H6.667zm10.666 0h-2.666V4h2.666A2.667 2.667 0 0120 6.667v2.666h-1.067V6.667a1.6 1.6 0 00-1.6-1.6zm-8 5.333H8.267V9.333h1.066V10.4zm6.4 0h-1.066V9.333h1.066V10.4zm-6.506 2.88a3.467 3.467 0 005.546 0l.854.64c-1.814 2.418-5.44 2.418-7.254 0l.854-.64zM4 17.333v-2.666h1.067v2.666a1.6 1.6 0 001.6 1.6h2.666V20H6.667A2.667 2.667 0 014 17.333zm16-2.666v2.666A2.667 2.667 0 0117.333 20h-2.666v-1.067h2.666a1.6 1.6 0 001.6-1.6v-2.666H20z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFaceId;
