import * as React from "react";

function SvgFolderPlus(props) {
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
        d="M4 6.6A1.6 1.6 0 015.6 5h4.488l2.133 2.133H18.4a1.6 1.6 0 011.6 1.6v8.534a1.6 1.6 0 01-1.6 1.6H5.6a1.6 1.6 0 01-1.6-1.6V6.6zm7.467 9.067v-2.134H9.333v-1.066h2.134v-2.134h1.066v2.133h2.134v1.067h-2.134v2.133h-1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFolderPlus;
