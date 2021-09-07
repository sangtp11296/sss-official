import * as React from "react";

function SvgMoodTongue(props) {
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
        d="M10.4 15.2v-1.6h3.2v1.6a1.6 1.6 0 11-3.2 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm5.333-1.6H8.267V9.333h1.066V10.4zm6.4 0h-1.066V9.333h1.066V10.4zm-7.466 3.2h1.066v1.6a2.667 2.667 0 105.334 0v-1.6h1.066v-1.067H8.267V13.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoodTongue;
