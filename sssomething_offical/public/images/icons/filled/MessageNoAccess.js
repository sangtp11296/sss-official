import * as React from "react";

function SvgMessageNoAccess(props) {
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
        d="M12 8.267a2.667 2.667 0 00-2.225 4.137l3.696-3.696A2.654 2.654 0 0012 8.267zM12 13.6a2.654 2.654 0 01-1.47-.442l3.695-3.695A2.667 2.667 0 0112 13.6z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5.6C4 4.714 4.716 4 5.6 4h12.8c.884 0 1.6.715 1.6 1.6v9.593c0 .884-.716 1.6-1.6 1.6h-3.981l-1.975 2.96a.533.533 0 01-.888 0l-1.975-2.96H5.6c-.884 0-1.6-.716-1.6-1.6V5.599zm4.267 5.333a3.733 3.733 0 117.466 0 3.733 3.733 0 01-7.466 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessageNoAccess;
