import * as React from "react";

function SvgPlus(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path stroke="currentColor" d="M4 11.971h16M12.029 4v16" />
    </svg>
  );
}

export default SvgPlus;
