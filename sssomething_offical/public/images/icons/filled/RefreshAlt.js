import * as React from "react";

function SvgRefreshAlt(props) {
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
        d="M18.367 6.647V4h1v3.733a.5.5 0 01-.5.5h-3.734v-1h2.414A6.967 6.967 0 005.5 12h-1a7.967 7.967 0 0113.867-5.353zm-5.9 12.32A6.967 6.967 0 0019.433 12h1a7.967 7.967 0 01-13.866 5.353V20h-1v-3.733a.5.5 0 01.5-.5H9.8v1H7.386a6.947 6.947 0 005.08 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgRefreshAlt;
