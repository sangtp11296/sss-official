import * as React from "react";

function SvgFileTick(props) {
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
        d="M5 5.6A1.6 1.6 0 016.6 4h8.754l3.513 3.512V18.4a1.6 1.6 0 01-1.6 1.6H6.6A1.6 1.6 0 015 18.4V5.6zm6.426 9.314l4.109-4.696-.803-.703-3.358 3.838-1.73-1.73-.754.754 2.536 2.537z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFileTick;
