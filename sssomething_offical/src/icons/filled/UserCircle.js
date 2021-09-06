import * as React from "react";

function SvgUserCircle(props) {
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
        d="M9.333 9.867a2.667 2.667 0 115.334 0 2.667 2.667 0 01-5.334 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4a8 8 0 100 16 8 8 0 000-16zm-6.933 8a6.933 6.933 0 1111.72 5.016 3.734 3.734 0 00-3.72-3.416h-2.134a3.734 3.734 0 00-3.72 3.416A6.914 6.914 0 015.067 12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUserCircle;
