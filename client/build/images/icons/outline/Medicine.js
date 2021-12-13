import * as React from "react";

function SvgMedicine(props) {
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
        d="M7.22 7.5h9.08v11.46a.5.5 0 01-.5.5H7.72a.5.5 0 01-.5-.5V7.5zM7.22 7a.5.5 0 00.5.5h8.08a.5.5 0 00.5-.5V4a.5.5 0 00-.5-.5H7.72a.5.5 0 00-.5.5v3zM6 7.5h11.52M11.04 10.82h5.76M11.04 15.86h5.76"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgMedicine;
