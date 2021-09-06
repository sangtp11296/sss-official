import * as React from "react";

function SvgVolume2(props) {
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
        d="M8.003 16H5.334A1.333 1.333 0 014 14.667V9.333C4 8.596 4.598 8 5.334 8h2.669l6.67-4v16l-6.67-4z"
        fill="currentColor"
      />
      <path
        d="M16.842 10.004v4.003h1v-4.003h-1zm2.668-2.669v9.34h1v-9.34h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVolume2;
