import * as React from "react";

function SvgRightSmall(props) {
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
        d="M14.192 11.243L9.95 7v9.9l4.242-4.243a1 1 0 000-1.414z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRightSmall;
