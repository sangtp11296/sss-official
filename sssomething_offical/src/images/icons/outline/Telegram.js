import * as React from "react";

function SvgTelegram(props) {
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
        d="M20 5L4 10.714 8.571 13l6.858-4.571-4.572 5.714 6.857 4.571L20 5z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgTelegram;
