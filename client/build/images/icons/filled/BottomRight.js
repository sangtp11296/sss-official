import * as React from "react";

function SvgBottomRight(props) {
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
        d="M5.354 3.646L19.5 17.793v-5.668h1V19a.5.5 0 01-.5.5h-6.875v-1h5.668L4.646 4.354l.708-.708z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBottomRight;
