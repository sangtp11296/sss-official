import * as React from "react";

function SvgEllipsis(props) {
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
        d="M7 12a2 2 0 1 1-4.001-.001A2 2 0 0 1 7 12zm12-2a2 2 0 1 0 .001 4.001A2 2 0 0 0 19 10zm-7 0a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 10z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEllipsis;
