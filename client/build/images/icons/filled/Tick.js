import * as React from "react";

function SvgTick(props) {
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
        d="M20.707 7L10.192 17.515l-5.9-5.9.708-.707 5.192 5.192L20 6.293l.707.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTick;
