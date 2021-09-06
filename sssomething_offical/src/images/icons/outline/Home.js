import * as React from "react";

function SvgHome(props) {
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
        d="M10.259 19.1v-4.504h3.478V19.1c0 .496.392.901.87.901h2.608c.479 0 .87-.405.87-.9v-7.305h1.478c.4 0 .591-.513.287-.784L12.58 4.23a.854.854 0 00-1.165 0L4.146 11.01c-.296.27-.113.784.287.784H5.91v7.304c0 .496.391.901.87.901h2.608c.479 0 .87-.405.87-.9z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgHome;
