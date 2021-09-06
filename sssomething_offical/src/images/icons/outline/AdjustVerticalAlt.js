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
        d="M8.133 4v9.067m0 0a2.133 2.133 0 100 4.266m0-4.266a2.133 2.133 0 110 4.266m0 0V20m8.534-16v2.667m0 0a2.133 2.133 0 000 4.266m0-4.266a2.133 2.133 0 110 4.266m0 0V20"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgAdjustVerticalAlt;
