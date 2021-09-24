import * as React from "react";

function SvgLeftSmall(props) {
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
        d="M13.95 7l-4.243 4.243a1 1 0 000 1.414l4.243 4.242"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgLeftSmall;
