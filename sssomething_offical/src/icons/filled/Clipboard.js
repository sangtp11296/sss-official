import * as React from "react";

function SvgClipboard(props) {
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
        d="M15.667 4H8.2v1.067H5V18.4A1.6 1.6 0 006.6 20h10.667a1.6 1.6 0 001.6-1.6V5.067h-3.2V4zM14.6 5.067H9.267v1.6c0 .294.238.533.533.533h4.267a.533.533 0 00.533-.533v-1.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClipboard;
