import * as React from "react";

function SvgPatreon(props) {
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
        d="M7.143 5H5v15h2.143V5zM9.286 10.357a5.357 5.357 0 1010.714 0 5.357 5.357 0 00-10.714 0z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgPatreon;
