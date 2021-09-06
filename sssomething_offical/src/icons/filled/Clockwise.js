import * as React from "react";

function SvgClockwise(props) {
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
        d="M11.798 5.786l-1.433-1.432.707-.708 2.287 2.286a.5.5 0 010 .707l-2.287 2.286-.707-.707 1.432-1.432A6.36 6.36 0 005.5 13.143a6.36 6.36 0 006.362 6.357 6.36 6.36 0 006.361-6.357v-.5h1v.5a7.36 7.36 0 01-7.361 7.357A7.36 7.36 0 014.5 13.143a7.36 7.36 0 017.298-7.357z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClockwise;
