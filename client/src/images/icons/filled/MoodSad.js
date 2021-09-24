import * as React from "react";

function SvgMoodSad(props) {
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
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm4.267-1.6h1.066V9.333H8.267V10.4zm6.4 0h1.066V9.333h-1.066V10.4zm-5.44 4.587a3.467 3.467 0 015.546 0l.854-.64c-1.814-2.418-5.44-2.418-7.254 0l.854.64z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoodSad;
