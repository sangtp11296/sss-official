import * as React from "react";

function SvgTestTube(props) {
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
        d="M5.308 15.94a1.942 1.942 0 00.128 2.742 1.94 1.94 0 002.744-.107l9.236-10.064-1.078-.99a.497.497 0 01-.125.268l-3.482 3.841a.5.5 0 11-.74-.671l3.481-3.841a.498.498 0 01.26-.152l-1.188-1.09-9.236 10.063z"
        fill="currentColor"
      />
      <path
        d="M17.556 8.64l-3.152-2.893a.47.47 0 01-.014-.664l.669-.73a.47.47 0 01.663-.042l3.152 2.893a.47.47 0 01.015.664l-.669.728a.47.47 0 01-.664.044z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTestTube;
