import * as React from "react";

function SvgGoogle(props) {
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
        d="M4 12a8 8 0 0113.714-5.599l-.762.747a6.933 6.933 0 101.96 5.386h-6.379v-1.067H20V12a8 8 0 11-16 0z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgGoogle;
