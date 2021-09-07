import * as React from "react";

function SvgFolderMinus(props) {
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
        d="M4 6.6A1.6 1.6 0 015.6 5h4.488l2.133 2.133H18.4a1.6 1.6 0 011.6 1.6v8.534a1.6 1.6 0 01-1.6 1.6H5.6a1.6 1.6 0 01-1.6-1.6V6.6zm5.333 6.933h5.334v-1.066H9.333v1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFolderMinus;
