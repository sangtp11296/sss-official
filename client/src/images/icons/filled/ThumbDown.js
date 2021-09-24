import * as React from "react";

function SvgThumbDown(props) {
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
        d="M10.309 19.213l-2.987-4.694v-7.75c0-1.224.991-2.215 2.214-2.215h5.537c.697 0 1.353.328 1.771.885l2.658 3.544v3.322a2.215 2.215 0 01-2.215 2.214h-5.536l1.51 3.022a1.699 1.699 0 01-2.952 1.672zM4.5 15.073V4h-1v11.073h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgThumbDown;
