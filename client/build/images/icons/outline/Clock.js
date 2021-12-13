import * as React from "react";

function SvgClock(props) {
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
        d="M12 12.5h-.5a.5.5 0 00.146.354L12 12.5zm0 7.5a7.5 7.5 0 01-7.5-7.5h-1A8.5 8.5 0 0012 21v-1zm7.5-7.5A7.5 7.5 0 0112 20v1a8.5 8.5 0 008.5-8.5h-1zM12 5a7.5 7.5 0 017.5 7.5h1A8.5 8.5 0 0012 4v1zm0-1a8.5 8.5 0 00-8.5 8.5h1A7.5 7.5 0 0112 5V4zm-.5 3.357V12.5h1V7.357h-1zm.146 5.497l3.429 3.428.707-.707-3.428-3.429-.708.708z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClock;
