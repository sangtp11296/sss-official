import * as React from "react";

function SvgGlobe(props) {
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
        d="M18.566 9.104A8.121 8.121 0 0015.81 3l-.828.939a6.887 6.887 0 11-9.146 10.299L5 15.17a8.11 8.11 0 004.8 2.049v2.528H6.044V21h8.765v-1.252h-3.757V17.22a8.14 8.14 0 007.514-8.116z"
        fill="currentColor"
      />
      <path
        d="M10.426 4.722a4.383 4.383 0 100 8.765 4.383 4.383 0 000-8.765z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGlobe;
