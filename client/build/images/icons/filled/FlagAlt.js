import * as React from "react";

function SvgFlagAlt(props) {
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
        d="M6.287 4.074a.567.567 0 01.571.007l11.334 6.8a.566.566 0 01-.039.992l-11.02 5.51V21H6V4.567c0-.204.11-.393.287-.493z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFlagAlt;
