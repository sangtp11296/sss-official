import * as React from "react";

function SvgTick(props) {
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
        d="M5 11.615l5.192 5.193L20 7"
        stroke="currentColor"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default SvgTick;
