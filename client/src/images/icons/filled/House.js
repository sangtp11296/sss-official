import * as React from "react";

function SvgHouse(props) {
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
        d="M12.31 4.04a.533.533 0 00-.62 0L4.223 9.374A.533.533 0 004 9.808v9.6c0 .294.239.533.533.533h1.6v-7.467h5.334v7.467h8a.533.533 0 00.533-.533v-9.6a.533.533 0 00-.223-.434l-.844-.603V6.074h-1.066V8.01L12.31 4.04zm3.423 12.7v-4.266H16.8v4.267h-1.067z"
        fill="currentColor"
      />
      <path
        d="M10.4 19.94v-3.2H9.333v-1.066H10.4v-2.133H7.2v6.4h3.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHouse;
