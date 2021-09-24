import * as React from "react";

function SvgMask(props) {
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
        d="M10.074 7.96c-.634.423-1.849 1.145-2.377 1.453-.66.39-2.221 1.258-1.188 4.357.792 2.377 1.452 3.169 2.508 3.697 1.057.528 5.942.528 7.13 0 1.189-.528 2.113-3.169 2.377-4.093.264-.924.505-2.537-.264-3.433-.792-.924-1.86-1.057-3.697-2.245-2.245-1.452-3.697-.264-4.49.264z"
        stroke="currentColor"
      />
      <path
        d="M10.338 9.94c.792-.66 2.773-1.584 4.357 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.788 11.393c.925.484 2.641 1.77 2.113 3.037-.66 1.585-1.452 1.585-3.697 2.113M6.211 11.393c-.924.484-2.64 1.77-2.112 3.037.66 1.585 1.485 1.585 3.73 2.113"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgMask;
