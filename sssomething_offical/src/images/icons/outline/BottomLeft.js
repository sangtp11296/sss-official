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
        d="M5 19h-.5a.5.5 0 00.5.5V19zm0 .5h6.875v-1H5v1zm.5-.5v-6.875h-1V19h1zm-.146.354l15-15-.708-.707-15 15 .708.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBottomLeft;
