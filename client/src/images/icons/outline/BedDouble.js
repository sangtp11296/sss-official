import * as React from "react";

function SvgBedDouble(props) {
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
        d="M20 11.172V20M4.552 11.172V20M4 15.034h16.552M4 11.724h16.552M6.207 9.517h4.414m3.31 0h4.414m-13.793.552V4H20v6.069"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgBedDouble;
