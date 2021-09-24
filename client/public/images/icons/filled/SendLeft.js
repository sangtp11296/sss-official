import * as React from "react";

function SvgSendLeft(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.27 4h1v16h-1V4zM6.206 12.5l4.07 4.07-.707.707-4.924-4.923a.5.5 0 010-.708L9.57 6.723l.707.707-4.07 4.07h11.716v1H6.207z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSendLeft;
