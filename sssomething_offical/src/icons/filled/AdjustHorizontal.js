import * as React from "react";

function SvgAdjustHorizontal(props) {
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
        d="M13.6 4h-3.2v2.133H4V7.2h6.4v2.133h3.2V7.2H20V6.133h-6.4V4zM9.333 9.333h-3.2v2.134H4v1.066h2.133v2.134h3.2v-2.134H20v-1.066H9.333V9.333zM17.867 14.667h-3.2V16.8H4v1.067h10.667V20h3.2v-2.133H20V16.8h-2.133v-2.133z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAdjustHorizontal;
