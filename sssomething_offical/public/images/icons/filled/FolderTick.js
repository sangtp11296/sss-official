import * as React from "react";

function SvgFolderTick(props) {
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
        d="M4 6.6A1.6 1.6 0 015.6 5h4.488l2.133 2.133H18.4a1.6 1.6 0 011.6 1.6v8.534a1.6 1.6 0 01-1.6 1.6H5.6a1.6 1.6 0 01-1.6-1.6V6.6zm7.493 9.314l4.108-4.696-.802-.703-3.358 3.838-1.73-1.73-.755.754 2.537 2.537z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFolderTick;
