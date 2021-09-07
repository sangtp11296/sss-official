import * as React from "react";

function SvgMoodLaugh(props) {
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
        d="M8.571 13v-.5a.5.5 0 00-.5.5h.5zm6.858 0h.5a.5.5 0 00-.5-.5v.5zm0-.5H8.57v1h6.858v-1zM12 16.929c2.213 0 3.929-1.716 3.929-3.929h-1c0 1.66-1.268 2.929-2.929 2.929v1zM8.071 13c0 2.213 1.716 3.929 3.929 3.929v-1c-1.66 0-2.929-1.268-2.929-2.929h-1zM12 19.5A7.5 7.5 0 014.5 12h-1a8.5 8.5 0 008.5 8.5v-1zm7.5-7.5a7.5 7.5 0 01-7.5 7.5v1a8.5 8.5 0 008.5-8.5h-1zM12 4.5a7.5 7.5 0 017.5 7.5h1A8.5 8.5 0 0012 3.5v1zm0-1A8.5 8.5 0 003.5 12h1A7.5 7.5 0 0112 4.5v-1zm-4 6.714h1.143v-1H8v1zm6.857 0H16v-1h-1.143v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoodLaugh;
