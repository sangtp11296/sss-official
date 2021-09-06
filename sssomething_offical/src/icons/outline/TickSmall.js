import * as React from "react";

function SvgTickSmall(props) {
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
        d="M7 11.765L10.808 16 18 8"
        stroke="currentColor"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default SvgTickSmall;
