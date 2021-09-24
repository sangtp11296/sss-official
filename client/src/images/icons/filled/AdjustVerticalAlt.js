import * as React from "react";

function SvgAdjustVerticalAlt(props) {
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
        d="M7.133 4v8.587a2.668 2.668 0 000 5.226V20H8.2v-2.187a2.668 2.668 0 000-5.226V4H7.133zM15.667 4v2.187a2.668 2.668 0 000 5.226V20h1.066v-8.587a2.668 2.668 0 000-5.226V4h-1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAdjustVerticalAlt;
