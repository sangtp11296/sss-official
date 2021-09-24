import * as React from "react";

function SvgBehance(props) {
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
        d="M4 6h3.2a3.2 3.2 0 012.188 5.535 3.201 3.201 0 01-1.121 6.198H4V6zm1.067 6.4v4.267h3.2a2.133 2.133 0 000-4.267h-3.2zm0-1.067H7.2a2.133 2.133 0 100-4.266H5.067v4.266zm13.866-3.2H13.6V7.067h5.333v1.066zM12.533 14A3.733 3.733 0 0120 14v.533h-6.347a2.668 2.668 0 004.776 1.029l.864.625A3.733 3.733 0 0112.533 14zm1.12-.533h5.227a2.668 2.668 0 00-5.227 0z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgBehance;
