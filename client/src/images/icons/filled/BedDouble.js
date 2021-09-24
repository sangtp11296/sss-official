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
        d="M4 3.94h16v6.4h-1.067V5.009H5.067v5.333H4v-6.4z"
        fill="currentColor"
      />
      <path
        d="M10.4 10.34H6.133V9.275H10.4v1.067zM4 19.94h1.067v-4.266h13.866v4.267H20v-8.533H4v8.533zM13.6 10.34h4.267V9.275H13.6v1.067z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBedDouble;
