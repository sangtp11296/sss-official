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
        d="M20 8.133h-9.067m0 0a2.133 2.133 0 10-4.266 0m4.266 0a2.133 2.133 0 11-4.266 0m0 0H4m16 8.534h-2.667m0 0a2.133 2.133 0 10-4.266 0m4.266 0a2.133 2.133 0 11-4.266 0m0 0H4"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgAdjustHorizontalAlt;
