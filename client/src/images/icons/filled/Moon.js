import * as React from "react";

function SvgMoon(props) {
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
        d="M5 16.413A7.43 7.43 0 0011.895 4 8.002 8.002 0 115 16.413z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoon;
