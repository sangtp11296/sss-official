import * as React from "react";

function SvgCup(props) {
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
        d="M11.467 8.267h1.066V4h-1.066v4.267zM9.333 6.133v2.134H8.267V6.133h1.066z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10.933a1.6 1.6 0 011.6-1.6h9.6a1.6 1.6 0 011.509 1.067H18.4A1.6 1.6 0 0120 12v2.133a1.6 1.6 0 01-1.6 1.6h-1.6v.534A3.733 3.733 0 0113.067 20H7.733A3.733 3.733 0 014 16.267v-5.334zm12.8 3.734h1.6a.533.533 0 00.533-.534V12a.533.533 0 00-.533-.533h-1.6v3.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCup;
