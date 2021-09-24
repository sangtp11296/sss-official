import * as React from "react";

function SvgDownLarge(props) {
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
        d="M12.51 15.253l7.45-7.45.707.707-7.45 7.45a1.5 1.5 0 01-2.12 0l-7.45-7.45.707-.707 7.45 7.45a.5.5 0 00.706 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDownLarge;
