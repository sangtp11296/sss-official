import * as React from "react";

function SvgDenied(props) {
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
        d="M3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0zm2.855-4.938a7.5 7.5 0 0010.583 10.583L6.355 7.062zm.707-.707l10.583 10.583A7.5 7.5 0 007.062 6.355z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDenied;
