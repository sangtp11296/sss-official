import * as React from "react";

function SvgEnvelope(props) {
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
        d="M4.5 6.6A1.6 1.6 0 016.1 5h12.8a1.6 1.6 0 011.6 1.6v1.288l-8 4.5-8-4.5V6.6z"
        fill="currentColor"
      />
      <path
        d="M4.5 9.112v8.155a1.6 1.6 0 001.6 1.6h12.8a1.6 1.6 0 001.6-1.6V9.112l-8 4.5-8-4.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEnvelope;
