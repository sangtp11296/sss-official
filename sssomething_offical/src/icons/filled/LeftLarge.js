import * as React from "react";

function SvgLeftLarge(props) {
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
        d="M16.154 4.354l-7.45 7.45a.5.5 0 000 .706l7.45 7.45-.708.707-7.45-7.45a1.5 1.5 0 010-2.12l7.45-7.45.708.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLeftLarge;
