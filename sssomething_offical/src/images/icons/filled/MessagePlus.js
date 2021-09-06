import * as React from "react";

function SvgMessagePlus(props) {
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
        d="M4 5.6C4 4.714 4.716 4 5.6 4h12.8c.884 0 1.6.715 1.6 1.6v9.593c0 .884-.716 1.6-1.6 1.6h-3.981l-1.975 2.96a.533.533 0 01-.888 0l-1.975-2.96H5.6c-.884 0-1.6-.716-1.6-1.6V5.599zm7.467 8v-2.133H9.333V10.4h2.134V8.267h1.066V10.4h2.134v1.067h-2.134V13.6h-1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessagePlus;
