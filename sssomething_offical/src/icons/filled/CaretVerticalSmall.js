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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 14l-3.375 2.7a1 1 0 01-1.25 0L8 14M8 9.2l3.375-2.7a1 1 0 011.25 0L16 9.2"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCaretVerticalSmall;
