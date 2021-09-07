import * as React from "react";

function SvgMinusCircle(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 12h8m-4 8a8 8 0 110-16 8 8 0 010 16z" stroke="currentColor" />
    </svg>
  );
}

export default SvgMinusCircle;
