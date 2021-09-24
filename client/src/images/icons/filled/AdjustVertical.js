import * as React from "react";

function SvgAdjustVertical(props) {
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
        d="M6.133 4v6.4H4v3.2h2.133V20H7.2v-6.4h2.133v-3.2H7.2V4H6.133zM9.333 14.667h2.134V4h1.066v10.667h2.134v3.2h-2.134V20h-1.066v-2.133H9.333v-3.2zM16.8 4v2.133h-2.133v3.2H16.8V20h1.067V9.333H20v-3.2h-2.133V4H16.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAdjustVertical;
