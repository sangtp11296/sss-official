import * as React from "react";

function SvgClock(props) {
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
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm7.467 0V7.2h1.066v4.58l3.044 3.043-.754.754-3.2-3.2a.531.531 0 01-.156-.377z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClock;
