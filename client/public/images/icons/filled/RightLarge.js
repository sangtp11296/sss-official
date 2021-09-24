import * as React from "react";

function SvgRightLarge(props) {
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
        d="M15.253 11.803l-7.45-7.45.707-.707 7.45 7.45a1.5 1.5 0 010 2.122l-7.45 7.45-.707-.708 7.45-7.45a.5.5 0 000-.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRightLarge;
