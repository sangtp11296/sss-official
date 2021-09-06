import * as React from "react";

function SvgZoomOut(props) {
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
        d="M4 11.002a7.002 7.002 0 1112.319 4.555L20 19.238l-.762.762-3.68-3.681A7.002 7.002 0 014 11.002zm4.309.538h5.386v-1.077H8.309v1.077z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgZoomOut;
