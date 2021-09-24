import * as React from "react";

function SvgFolderNoAccess(props) {
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
        d="M12 10.333a2.667 2.667 0 00-2.225 4.137l3.696-3.695A2.654 2.654 0 0012 10.333zM12 15.666a2.654 2.654 0 01-1.47-.441l3.695-3.696A2.667 2.667 0 0112 15.666z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6.6A1.6 1.6 0 015.6 5h4.488l2.133 2.133H18.4a1.6 1.6 0 011.6 1.6v8.534a1.6 1.6 0 01-1.6 1.6H5.6a1.6 1.6 0 01-1.6-1.6V6.6zM8.267 13a3.733 3.733 0 117.466 0 3.733 3.733 0 01-7.466 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFolderNoAccess;
