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
        d="M7.31 20l-.353.354a.5.5 0 00.707 0L7.31 20zm.354.354l3.31-3.31-.707-.708-3.31 3.31.707.708zm0-.708l-3.31-3.31-.708.707 3.31 3.31.708-.707zM6.81 4v16h1V4h-1zm6.57 4.362H20v-1h-6.62v1zm0 4.414h4.413v-1h-4.414v1zm0 4.414h2.206v-1H13.38v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSortDown;
