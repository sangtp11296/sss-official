import * as React from "react";

function SvgBedSingle(props) {
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
        d="M19.467 8.267V20M4.533 4v16M4 15.2h16M4 12h16M6.133 9.867H10.4"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgBedSingle;
