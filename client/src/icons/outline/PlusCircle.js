import * as React from "react";

function SvgPlusCircle(props) {
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
        d="M12 8v8m-4-4h8m-4 8a8 8 0 110-16 8 8 0 010 16z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgPlusCircle;
