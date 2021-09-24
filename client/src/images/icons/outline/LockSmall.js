import * as React from "react";

function SvgLockSmall(props) {
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
        d="M8.8 10.9h6.4v-1H8.8v1zm7.5 1.1v4.8h1V12h-1zm-1.1 5.9H8.8v1h6.4v-1zm-7.5-1.1V12h-1v4.8h1zm1.1 1.1a1.1 1.1 0 01-1.1-1.1h-1c0 1.16.94 2.1 2.1 2.1v-1zm7.5-1.1a1.1 1.1 0 01-1.1 1.1v1a2.1 2.1 0 002.1-2.1h-1zm-1.1-5.9a1.1 1.1 0 011.1 1.1h1a2.1 2.1 0 00-2.1-2.1v1zm-6.4-1A2.1 2.1 0 006.7 12h1a1.1 1.1 0 011.1-1.1v-1zm.5.5V8.8h-1v1.6h1zm5.4-1.6v1.6h1V8.8h-1zM12 6.1a2.7 2.7 0 012.7 2.7h1A3.7 3.7 0 0012 5.1v1zM9.3 8.8A2.7 2.7 0 0112 6.1v-1a3.7 3.7 0 00-3.7 3.7h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLockSmall;
