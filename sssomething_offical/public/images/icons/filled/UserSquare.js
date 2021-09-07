import * as React from "react";

function SvgUserSquare(props) {
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
        d="M6.5 5A1.5 1.5 0 005 6.5v12A1.5 1.5 0 006.5 20h12a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0018.5 5h-12zm5 9A3.5 3.5 0 008 17.5v1a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-1a3.5 3.5 0 00-3.5-3.5h-2zM10 10.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUserSquare;
