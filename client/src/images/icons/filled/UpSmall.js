import * as React from "react";

function SvgUpSmall(props) {
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
        d="M16.95 13.95l-4.243-4.243a1 1 0 00-1.414 0L7.05 13.95h9.9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUpSmall;
