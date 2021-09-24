import * as React from "react";

function SvgBook(props) {
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
        d="M5.533 4A.533.533 0 005 4.533V18.4c0 .295.239.533.533.533h1.6V4h-1.6z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.2 20h1.067v-1.067H16.2a2.667 2.667 0 002.667-2.666v-9.6A2.667 2.667 0 0016.2 4h-8v16zm7.467-10.667H11.4V8.267h4.267v1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBook;
