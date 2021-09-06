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
        d="M5.436 18.682a1.942 1.942 0 01-.128-2.743l9.236-10.064 2.872 2.636L8.18 18.575a1.94 1.94 0 01-2.744.107zM15.843 7.453l-3.482 3.842"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <path
        d="M17.556 8.64l-3.152-2.893a.47.47 0 01-.014-.664l.669-.73a.47.47 0 01.663-.042l3.152 2.893a.47.47 0 01.015.664l-.669.728a.47.47 0 01-.664.044z"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgTestTube;
