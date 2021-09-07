import * as React from "react";

function SvgAt(props) {
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
        d="M15.429 12a3.429 3.429 0 11-6.858 0 3.429 3.429 0 016.858 0zm0 0v1.143a2.286 2.286 0 004.571 0V12a8 8 0 10-3.429 6.566"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgAt;
