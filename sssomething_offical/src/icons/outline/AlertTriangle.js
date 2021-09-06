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
        d="M10.69 5.737L4.206 16.564a1.531 1.531 0 001.31 2.297h12.97a1.532 1.532 0 001.31-2.297L13.309 5.737a1.532 1.532 0 00-2.618 0v0zM12 9.673v3.063M12 15.799h.008"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgAlertTriangle;
