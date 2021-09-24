import * as React from "react";

function SvgMoodFlat(props) {
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
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm4.267-1.6h1.066V9.333H8.267V10.4zm6.4 0h1.066V9.333h-1.066V10.4zm1.066 3.2v1.067H8.267V13.6h7.466z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoodFlat;
