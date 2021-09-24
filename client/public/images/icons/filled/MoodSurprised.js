import * as React from "react";

function SvgMoodSurprised(props) {
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
        d="M11.467 12.533a1.067 1.067 0 000 2.134h1.066a1.067 1.067 0 000-2.134h-1.066z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm4.267-1.6h1.066V9.333H8.267V10.4zm6.4 0h1.066V9.333h-1.066V10.4zm-5.334 3.2c0-1.178.956-2.133 2.134-2.133h1.066a2.133 2.133 0 110 4.266h-1.066A2.133 2.133 0 019.333 13.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoodSurprised;
