import * as React from "react";

function SvgMenu(props) {
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
        stroke="currentColor"
        strokeLinejoin="round"
        d="M4 5.5h16.8M4 18.3h9.6M4 11.9h13.2"
      />
    </svg>
  );
}

export default SvgMenu;
