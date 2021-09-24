import * as React from "react";

function SvgShield(props) {
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
        d="M4 8.571L12 4l8 4.571v.823A11.03 11.03 0 0112 20 11.03 11.03 0 014 9.394v-.823z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShield;
