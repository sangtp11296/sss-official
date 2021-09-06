import * as React from "react";

function SvgAnchor(props) {
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
        d="M11.805 8.371a2.287 2.287 0 002.287-2.285 2.287 2.287 0 00-4.574 0 2.287 2.287 0 002.287 2.285zm0 0V19.8m0 0c-4.42 0-8.005-3.582-8.005-8h2.287m5.718 8c4.422 0 8.006-3.582 8.006-8h-2.288"
        stroke="currentColor"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default SvgAnchor;
