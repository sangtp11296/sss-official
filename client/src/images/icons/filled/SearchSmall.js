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
      <path d="M13.6 13.6l3.2 3.2" stroke="currentColor" />
      <path d="M7.2 11.2a4 4 0 108 0 4 4 0 00-8 0z" fill="currentColor" />
    </svg>
  );
}

export default SvgSearchSmall;
