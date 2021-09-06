import * as React from "react";

function SvgDownLarge(props) {
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
        d="M20.314 8.157l-7.45 7.45a1 1 0 01-1.414 0L4 8.157"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgDownLarge;
