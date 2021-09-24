import * as React from "react";

function SvgBell(props) {
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
        d="M4.6 14.429h14.857m-13.143 0V8.714a5.714 5.714 0 1111.429 0v5.715m-8 1.714v.571a2.286 2.286 0 104.571 0v-.571"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgBell;
