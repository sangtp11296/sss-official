import * as React from "react";

function SvgAlertTriangle(props) {
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
        d="M10.69 5.737L4.206 16.564a1.531 1.531 0 001.31 2.297h12.97a1.532 1.532 0 001.31-2.297L13.309 5.737a1.532 1.532 0 00-2.618 0zm.81 10.061a.5.5 0 01.5-.5h.008a.5.5 0 010 1H12a.5.5 0 01-.5-.5zm1-6.125a.5.5 0 00-1 0v3.063a.5.5 0 101 0V9.673z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAlertTriangle;
