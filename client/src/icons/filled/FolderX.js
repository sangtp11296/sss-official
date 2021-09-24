import * as React from "react";

function SvgFolderX(props) {
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
        d="M4 6.6A1.6 1.6 0 015.6 5h4.488l2.133 2.133H18.4a1.6 1.6 0 011.6 1.6v8.534a1.6 1.6 0 01-1.6 1.6H5.6a1.6 1.6 0 01-1.6-1.6V6.6zm9.756 8.91L12 13.754l-1.756 1.756-.754-.754L11.246 13 9.49 11.244l.754-.755L12 12.246l1.756-1.757.755.755L12.754 13l1.757 1.756-.755.754z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFolderX;
