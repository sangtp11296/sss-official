import * as React from "react";

function SvgInbox(props) {
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
        d="M4 5.6A1.6 1.6 0 015.6 4h12.8A1.6 1.6 0 0120 5.6v6.933h-4.8a.533.533 0 00-.533.534 2.667 2.667 0 01-5.334 0 .533.533 0 00-.533-.534H4V5.6z"
        fill="currentColor"
      />
      <path
        d="M4 13.6v4.8A1.6 1.6 0 005.6 20h12.8a1.6 1.6 0 001.6-1.6v-4.8h-4.305a3.734 3.734 0 01-7.39 0H4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgInbox;
