import * as React from "react";

function SvgGoogle(props) {
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
        d="M20 12.5h.5V12H20v.5zm-7.5 7a7 7 0 01-7-7h-1a8 8 0 008 8v-1zm7-7a7 7 0 01-7 7v1a8 8 0 008-8h-1zm-7-8a8 8 0 00-8 8h1a7 7 0 017-7v-1zm0 1c1.959 0 3.729.804 5 2.101l.714-.7A7.978 7.978 0 0012.5 4.5v1zm.536 7.5H20v-1h-6.964v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGoogle;
