import * as React from "react";

function SvgDownSmall(props) {
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
        d="M16.95 9.95l-4.243 4.242a1 1 0 01-1.414 0L7.05 9.95"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgDownSmall;
