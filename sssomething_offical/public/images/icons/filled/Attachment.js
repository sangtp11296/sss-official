import * as React from "react";

function SvgAttachment(props) {
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
        d="M4 8.8V4h1.067v4.8a1.6 1.6 0 103.2 0V5.6a.533.533 0 00-1.067 0v3.733H6.133V5.6a1.6 1.6 0 013.2 0v3.2A2.667 2.667 0 114 8.8z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.333 4H10.4v4.8a3.733 3.733 0 01-3.733 3.733h-1.6V18.4a1.6 1.6 0 001.6 1.6h10.666a1.6 1.6 0 001.6-1.6V5.6a1.6 1.6 0 00-1.6-1.6zm-1.6 4.267h-4.266v1.066h4.266V8.267zm0 3.2h-4.266v1.066h4.266v-1.066zm-7.466 3.2h7.466v1.066H8.267v-1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAttachment;
