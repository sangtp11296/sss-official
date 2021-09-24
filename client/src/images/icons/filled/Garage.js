import * as React from "react";

function SvgGarage(props) {
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
        d="M11.69 4.04a.533.533 0 01.62 0l7.467 5.334c.14.1.223.261.223.434v9.6a.533.533 0 01-.533.533h-1.6v-8.533H6.133v8.533h-1.6A.533.533 0 014 19.408v-9.6c0-.173.083-.334.223-.434L11.69 4.04z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.2 19.94h9.6v-4.266H7.2v4.267zm6.4-2.132h-3.2V16.74h3.2v1.067z"
        fill="currentColor"
      />
      <path d="M16.8 14.608v-2.134H7.2v2.134h9.6z" fill="currentColor" />
    </svg>
  );
}

export default SvgGarage;
