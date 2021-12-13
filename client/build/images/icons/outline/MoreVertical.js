import * as React from "react";

function SvgMoreVertical(props) {
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
        d="M11.727 5.455a.727.727 0 110-1.455.727.727 0 010 1.455zM11.727 12.727a.727.727 0 110-1.454.727.727 0 010 1.454zM11.727 20a.727.727 0 110-1.455.727.727 0 010 1.455z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgMoreVertical;
