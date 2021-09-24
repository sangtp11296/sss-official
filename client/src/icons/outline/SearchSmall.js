import * as React from "react";

function SvgSearchSmall(props) {
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
        d="M13.6 13.6l3.2 3.2m-5.6-1.6a4 4 0 110-8 4 4 0 010 8z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgSearchSmall;
