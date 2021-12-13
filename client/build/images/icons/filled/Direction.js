import * as React from "react";

function SvgDirection(props) {
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
        d="M4.743 4.043a.533.533 0 00-.7.7l6.4 14.934a.533.533 0 00.996-.042l2.05-6.147 6.146-2.049a.533.533 0 00.042-.996l-14.934-6.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDirection;
