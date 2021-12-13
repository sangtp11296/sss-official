import * as React from "react";

function SvgInfoCircle(props) {
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
        d="M11.5 8.571v.5h1v-.5h-1zm1-.011v-.5h-1v.5h1zm0 7.44v-4.572h-1V16h1zm0-7.429V8.56h-1v.011h1zM10.286 12.5H12v-1h-1.714v1zm0 3.428h3.428v-1h-3.428v1zM12 4.5a7.5 7.5 0 017.5 7.5h1A8.5 8.5 0 0012 3.5v1zM4.5 12A7.5 7.5 0 0112 4.5v-1A8.5 8.5 0 003.5 12h1zm7.5 7.5A7.5 7.5 0 014.5 12h-1a8.5 8.5 0 008.5 8.5v-1zm0 1a8.5 8.5 0 008.5-8.5h-1a7.5 7.5 0 01-7.5 7.5v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgInfoCircle;
