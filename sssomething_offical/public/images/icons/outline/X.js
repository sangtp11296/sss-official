import * as React from "react";

function SvgX(props) {
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
        stroke="currentColor"
        d="M6.364 6.322l11.314 11.314M17.678 6.364L6.364 17.678"
      />
    </svg>
  );
}

export default SvgX;
