import * as React from "react";

function SvgVolume3(props) {
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
        d="M7.003 16H4.334A1.333 1.333 0 013 14.667V9.333C3 8.596 3.598 8 4.334 8h2.669l6.67-4v16l-6.67-4z"
        fill="currentColor"
      />
      <path
        d="M15.842 10.004v4.002h1v-4.002h-1zm2.668-2.669v9.34h1v-9.34h-1zm2.669-2.668v14.676h1V4.667h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVolume3;
