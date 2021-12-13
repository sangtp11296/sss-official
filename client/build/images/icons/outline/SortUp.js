import * as React from "react";

function SvgSortUp(props) {
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
        d="M7.31 4l.354-.354a.5.5 0 00-.707 0L7.31 4zm-.353-.354l-3.31 3.31.707.708 3.31-3.31-.707-.708zm0 .708l3.31 3.31.707-.707-3.31-3.31-.707.707zM6.81 4v16h1V4h-1zm6.57 3.81H20v-1h-6.62v1zm0 4.414h4.413v-1H13.38v1zm0 4.414h2.206v-1H13.38v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSortUp;
