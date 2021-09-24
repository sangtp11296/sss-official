import * as React from "react";

function SvgKey(props) {
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
        d="M3.8 19.8l9.143-9.143m-6.857 6.857L8.37 19.8m0-4.571l2.286 2.285M15.8 11.8a4 4 0 110-8 4 4 0 010 8z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgKey;
