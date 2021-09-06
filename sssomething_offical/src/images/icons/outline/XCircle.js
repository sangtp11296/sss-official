import * as React from "react";

function SvgXCircle(props) {
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
        d="M8.571 8.571l6.858 6.857m-6.858 0l6.858-6.857M12 20a8 8 0 110-16 8 8 0 010 16z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgXCircle;
