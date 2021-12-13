import * as React from "react";

function SvgUpLarge(props) {
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
        d="M11.096 8.154a1.5 1.5 0 012.121 0l7.45 7.45-.707.706-7.45-7.45a.5.5 0 00-.707 0l-7.45 7.45-.707-.707 7.45-7.45z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUpLarge;
