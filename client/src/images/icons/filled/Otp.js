import * as React from "react";

function SvgOtp(props) {
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
        d="M7.733 10.4a.533.533 0 00-.533.533v2.134a.533.533 0 001.067 0v-2.134a.533.533 0 00-.534-.533zM15.733 11.467h.534a.533.533 0 000-1.067h-.534v1.067z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5.6A1.6 1.6 0 015.6 4h12.8A1.6 1.6 0 0120 5.6v12.8a1.6 1.6 0 01-1.6 1.6H5.6A1.6 1.6 0 014 18.4V5.6zm2.133 5.333a1.6 1.6 0 013.2 0v2.134a1.6 1.6 0 01-3.2 0v-2.134zm5.334-.533H10.4V9.333h3.2V10.4h-1.067v4.267h-1.066V10.4zm3.2-1.067h1.6a1.6 1.6 0 010 3.2h-.534v2.134h-1.066V9.333z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgOtp;
