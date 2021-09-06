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
        d="M9.95 7l4.242 4.243a1 1 0 010 1.414L9.95 16.899"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgRightSmall;
