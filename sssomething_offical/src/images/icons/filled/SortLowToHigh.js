import * as React from "react";

function SvgSortLowToHigh(props) {
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
        d="M9.31 3.5a.5.5 0 01.354.146l3.31 3.31-.707.708L9.81 5.207V20h-1V5.207L6.354 7.664l-.708-.707 3.31-3.31A.5.5 0 019.31 3.5zm7.225 1h-1.156v-1h1.656a.5.5 0 01.5.5v6.12h1.155v1h-3.31v-1h1.155V4.5zm-2.207 9.983c0-1.19.965-2.155 2.155-2.155h.637a2.029 2.029 0 011.925 2.67l-1.536 4.608-.949-.316.884-2.652h-.961a2.155 2.155 0 01-2.155-2.155zm3.45 1.155l.318-.957a1.029 1.029 0 00-.976-1.353h-.637a1.155 1.155 0 000 2.31h1.294z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSortLowToHigh;
