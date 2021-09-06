import * as React from "react";

function SvgAntiClockwise(props) {
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
        d="M10.364 5.932l2.286-2.286.708.708-1.433 1.432a7.36 7.36 0 017.298 7.357 7.36 7.36 0 01-7.361 7.357A7.36 7.36 0 014.5 13.143v-.5h1v.5a6.36 6.36 0 006.362 6.357 6.36 6.36 0 006.361-6.357 6.36 6.36 0 00-6.297-6.357l1.432 1.432-.708.707-2.286-2.286a.5.5 0 010-.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAntiClockwise;
