import * as React from "react";

function SvgPen(props) {
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
        d="M6.102 4h11.995v.545c0 1.797-.79 3.41-2.044 4.508l2.146 4.285L12.646 20v-6.192h-1.09v6.191L6 13.34l2.145-4.286a5.978 5.978 0 01-2.043-4.508V4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPen;
