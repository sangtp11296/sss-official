import * as React from "react";

function SvgPinterest(props) {
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
        d="M4 12a8 8 0 114.89 7.373l2.038-4.659a2.753 2.753 0 002.139 1.02A3.733 3.733 0 0016.8 12v-.533A4.267 4.267 0 0012.533 7.2h-1.066A4.267 4.267 0 007.2 11.467V12c0 .956.36 1.829.95 2.489l.796-.711A2.655 2.655 0 018.266 12v-.533a3.2 3.2 0 013.2-3.2h1.067a3.2 3.2 0 013.2 3.2V12a2.667 2.667 0 01-2.666 2.667c-.726 0-1.37-.465-1.6-1.153l-.006-.018 1.028-2.349-.978-.427-3.575 8.172A7.996 7.996 0 014 12z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPinterest;
