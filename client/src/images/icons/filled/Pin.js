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
        d="M10.67 11.367a1.701 1.701 0 013.402 0 1.701 1.701 0 01-3.402 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 11.367A7.37 7.37 0 0112.371 4a7.37 7.37 0 017.371 7.367c0 3.032-1.517 5.434-3.143 7.059a12.325 12.325 0 01-2.398 1.876 7.305 7.305 0 01-1.004.501c-.28.11-.574.197-.826.197s-.546-.086-.826-.197a7.305 7.305 0 01-1.003-.501 12.324 12.324 0 01-2.399-1.876C6.518 16.802 5 14.399 5 11.366zm7.371-2.834a2.835 2.835 0 00-2.835 2.834 2.835 2.835 0 005.67 0 2.835 2.835 0 00-2.835-2.834z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPin;
