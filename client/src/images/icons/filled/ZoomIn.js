import * as React from "react";

function SvgZoomIn(props) {
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
        d="M4 11.002a7.002 7.002 0 1112.319 4.555L20 19.238l-.762.762-3.68-3.681A7.002 7.002 0 014 11.002zm6.463 2.693V11.54H8.31v-1.077h2.154V8.31h1.077v2.154h2.155v1.077H11.54v2.155h-1.077z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgZoomIn;
