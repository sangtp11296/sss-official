import * as React from "react";

function SvgHeartSmall(props) {
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
        d="M10.4 8.8l1.6 1.6 1.6-1.6a2.263 2.263 0 013.2 3.2L12 16.8 7.2 12a2.263 2.263 0 113.2-3.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHeartSmall;
