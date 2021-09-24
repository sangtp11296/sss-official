import * as React from "react";

function SvgTemp(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.636 4a2.182 2.182 0 00-2.181 2.182v7.272a3.636 3.636 0 104.364 0V6.182A2.182 2.182 0 0010.635 4z"
        fill="currentColor"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M15.982 6.594h-1.529M15.982 9.122h-1.529M15.982 11.651h-1.529"
      />
    </svg>
  );
}

export default SvgTemp;
