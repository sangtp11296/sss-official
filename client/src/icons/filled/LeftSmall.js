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
        d="M9.707 12.657l4.243 4.242V7l-4.243 4.243a1 1 0 000 1.414z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLeftSmall;
