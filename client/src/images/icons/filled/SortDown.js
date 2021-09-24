import * as React from "react";

function SvgSortDown(props) {
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
        d="M6.81 18.793V4h1v14.793l2.457-2.457.707.707-3.31 3.31a.5.5 0 01-.707 0l-3.31-3.31.707-.707 2.456 2.457zM20 8.363h-6.62v-1H20v1zm-2.207 4.413H13.38v-1h4.414v1zm-2.207 4.414H13.38v-1h2.207v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSortDown;
