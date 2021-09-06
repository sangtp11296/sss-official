import * as React from "react";

function SvgBottomLeft(props) {
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
        d="M20.354 4.354L6.207 18.5h5.668v1H5a.5.5 0 01-.5-.5v-6.875h1v5.668L19.646 3.646l.708.708z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBottomLeft;
