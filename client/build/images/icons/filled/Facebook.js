import * as React from "react";

function SvgFacebook(props) {
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
        d="M4 12.009C4 7.586 7.582 4 12 4s8 3.586 8 8.009A8.005 8.005 0 0112.533 20v-6.39h2.134v-1.067h-2.134V10.94a1.6 1.6 0 011.6-1.602h.534V8.271h-.534a2.668 2.668 0 00-2.666 2.67v1.602H9.333v1.068h2.134V20A8.006 8.006 0 014 12.009z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFacebook;
