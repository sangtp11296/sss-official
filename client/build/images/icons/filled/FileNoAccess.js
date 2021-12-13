import * as React from "react";

function SvgFileNoAccess(props) {
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
        d="M11.933 9.333a2.667 2.667 0 00-2.225 4.138l3.696-3.696a2.654 2.654 0 00-1.47-.442zM11.933 14.667a2.654 2.654 0 01-1.47-.442l3.695-3.696a2.667 2.667 0 01-2.225 4.137z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5.6A1.6 1.6 0 016.6 4h8.754l3.513 3.512V18.4a1.6 1.6 0 01-1.6 1.6H6.6A1.6 1.6 0 015 18.4V5.6zM8.2 12a3.733 3.733 0 117.467 0A3.733 3.733 0 018.2 12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFileNoAccess;
