import * as React from "react";

function SvgThumbUp(props) {
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
        d="M10.309 4.787L7.322 9.481v7.75c0 1.224.991 2.215 2.214 2.215h5.537c.697 0 1.353-.328 1.771-.886l2.658-3.543v-3.322a2.214 2.214 0 00-2.215-2.214h-5.536l1.51-3.022a1.7 1.7 0 00-2.952-1.672zM3.5 8.927V20h1V8.927h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgThumbUp;
