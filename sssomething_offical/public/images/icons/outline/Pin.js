import * as React from "react";

function SvgPin(props) {
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
        clipRule="evenodd"
        d="M11.862 13.143a2.287 2.287 0 002.287-2.286 2.287 2.287 0 00-4.575 0 2.287 2.287 0 002.288 2.286z"
        stroke="currentColor"
        strokeLinecap="square"
      />
      <path
        clipRule="evenodd"
        d="M18.723 10.857c0 5.714-5.718 9.143-6.861 9.143C10.718 20 5 16.571 5 10.857A6.86 6.86 0 0111.862 4a6.86 6.86 0 016.861 6.857z"
        stroke="currentColor"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default SvgPin;
