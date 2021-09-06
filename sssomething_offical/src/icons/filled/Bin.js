import * as React from "react";

function SvgBin(props) {
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
        d="M15.733 7.2V5.6a1.6 1.6 0 00-1.6-1.6H9.867a1.6 1.6 0 00-1.6 1.6v1.6H4v1.067h1.067V18.4a1.6 1.6 0 001.6 1.6h10.666a1.6 1.6 0 001.6-1.6V8.267H20V7.2h-4.267zm-6.4-1.6c0-.295.24-.533.534-.533h4.266c.295 0 .534.238.534.533v1.6H9.333V5.6zm2.134 5.867V16.8h1.066v-5.333h-1.066zm-3.2 5.333v-3.2h1.066v3.2H8.267zm6.4-3.2v3.2h1.066v-3.2h-1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBin;
