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
        d="M19.467 19.467L15.2 15.2m-4.267 2.133a6.4 6.4 0 110-12.8 6.4 6.4 0 010 12.8z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgSearch;
