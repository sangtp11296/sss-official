import * as React from "react";

function SvgX(props) {
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
        d="M17.324 17.99L6.01 6.676l.708-.707L18.03 17.282l-.707.708z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.01 17.324L17.324 6.01l.707.708L6.717 18.03l-.707-.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgX;
