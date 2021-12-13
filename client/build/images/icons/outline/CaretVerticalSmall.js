import * as React from "react";

function SvgCaretVerticalSmall(props) {
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
        d="M15.5 14l-2.875 2.3a1 1 0 01-1.25 0L8.5 14m0-4.2l2.875-2.3a1 1 0 011.25 0L15.5 9.8"
        stroke="currentColor"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default SvgCaretVerticalSmall;
