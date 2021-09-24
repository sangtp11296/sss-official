import * as React from "react";

function SvgAdjustHorizontalAlt(props) {
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
        d="M8.8 5c-1.29 0-2.366.916-2.613 2.133H4V8.2h2.187a2.668 2.668 0 005.226 0H20V7.133h-8.587A2.668 2.668 0 008.8 5zM15.2 13.533c-1.29 0-2.366.917-2.613 2.134H4v1.066h8.587a2.668 2.668 0 005.226 0H20v-1.066h-2.187a2.668 2.668 0 00-2.613-2.134z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAdjustHorizontalAlt;
