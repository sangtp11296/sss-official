import * as React from "react";

function SvgLeftLarge(props) {
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
        d="M15.8 4l-7.45 7.45a1 1 0 000 1.414l7.45 7.45"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgLeftLarge;
