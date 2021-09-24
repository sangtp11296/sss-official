import * as React from "react";

function SvgSearch(props) {
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
        d="M4.033 10.933a6.9 6.9 0 1113.8 0 6.9 6.9 0 01-13.8 0zm6.9-5.9a5.9 5.9 0 100 11.8 5.9 5.9 0 000-11.8z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.553 14.846l4.267 4.267-.707.707-4.267-4.267.707-.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSearch;
