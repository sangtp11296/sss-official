import * as React from "react";

function SvgFlag(props) {
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
        d="M5 5.5a.5.5 0 01.5-.5h14a.5.5 0 01.457.703L18.047 10l1.91 4.297A.5.5 0 0119.5 15H6v5H5V5.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFlag;
