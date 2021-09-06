import * as React from "react";

function SvgExclamationCircle(props) {
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
        d="M12.5 15.428v-.5h-1v.5h1zm-1 .012v.5h1v-.5h-1zm0-7.44v4.571h1V8h-1zm0 7.428v.012h1v-.011h-1zM12 19.5A7.5 7.5 0 014.5 12h-1a8.5 8.5 0 008.5 8.5v-1zm7.5-7.5a7.5 7.5 0 01-7.5 7.5v1a8.5 8.5 0 008.5-8.5h-1zM12 4.5a7.5 7.5 0 017.5 7.5h1A8.5 8.5 0 0012 3.5v1zm0-1A8.5 8.5 0 003.5 12h1A7.5 7.5 0 0112 4.5v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgExclamationCircle;
