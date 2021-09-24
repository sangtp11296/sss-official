import * as React from "react";

function SvgSave(props) {
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
        d="M5 6.5A1.5 1.5 0 016.5 5h8.586a1.5 1.5 0 011.06.44l3.415 3.414A1.5 1.5 0 0120 9.914V18.5a1.5 1.5 0 01-1.5 1.5H16v-3.5a1.5 1.5 0 00-1.5-1.5h-4A1.5 1.5 0 009 16.5V20H6.5A1.5 1.5 0 015 18.5v-12z"
        fill="currentColor"
      />
      <path
        d="M10 20h5v-3.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5V20z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSave;
