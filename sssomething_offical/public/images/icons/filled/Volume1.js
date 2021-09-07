import * as React from "react";

function SvgVolume1(props) {
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
        d="M9.003 16H6.334A1.333 1.333 0 015 14.667V9.333C5 8.596 5.598 8 6.334 8h2.669l6.67-4v16l-6.67-4z"
        fill="currentColor"
      />
      <path d="M17.842 10.004v4.003h1v-4.003h-1z" fill="currentColor" />
    </svg>
  );
}

export default SvgVolume1;
