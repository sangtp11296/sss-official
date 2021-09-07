import * as React from "react";

function SvgRightLarge(props) {
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
        d="M8.157 4l7.45 7.45a1 1 0 010 1.414l-7.45 7.45"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgRightLarge;
