import * as React from "react";

function SvgMoreHorizontal(props) {
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
        d="M5.455 11.727a.727.727 0 11-1.455 0 .727.727 0 011.455 0zM12.727 11.727a.727.727 0 11-1.454 0 .727.727 0 011.454 0zM20 11.727a.727.727 0 11-1.454 0 .727.727 0 011.454 0z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgMoreHorizontal;
