import * as React from "react";

function SvgPrint(props) {
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
        d="M7.2 5.6A1.6 1.6 0 018.8 4h6.4a1.6 1.6 0 011.6 1.6v3.733H7.2V5.6zM5.6 10.4A1.6 1.6 0 004 12v4.267a1.6 1.6 0 001.6 1.6h.533V13.6h11.734v4.267h.533a1.6 1.6 0 001.6-1.6V12a1.6 1.6 0 00-1.6-1.6H5.6z"
        fill="currentColor"
      />
      <path d="M7.2 14.667h9.6V20H7.2v-5.333z" fill="currentColor" />
    </svg>
  );
}

export default SvgPrint;
