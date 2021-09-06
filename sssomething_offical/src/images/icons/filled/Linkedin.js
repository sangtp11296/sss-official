import * as React from "react";

function SvgLinkedin(props) {
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
        d="M4 5.6A1.6 1.6 0 015.6 4h12.8A1.6 1.6 0 0120 5.6v12.8a1.6 1.6 0 01-1.6 1.6H5.6A1.6 1.6 0 014 18.4V5.6zm5.333 3.733H8.267V8.267h1.066v1.066zm-1.066 6.4V10.4h1.066v5.333H8.267zm4.8-4.266a1.6 1.6 0 00-1.6 1.6v2.666H10.4V10.4h1.067v.533a2.667 2.667 0 014.267 2.134v2.666h-1.067v-2.666a1.6 1.6 0 00-1.6-1.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLinkedin;
