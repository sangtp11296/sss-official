import * as React from "react";

function SvgSpreadsheet(props) {
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
        d="M14.6 12.528v2.139h-2.133v-2.139H14.6zM14.6 9.33v2.132h-2.133V9.33H14.6zM11.4 9.33H9.267v2.132H11.4V9.33zM11.4 12.528H9.267v2.139H11.4v-2.139z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5.6A1.6 1.6 0 016.6 4h8.754l3.513 3.512V18.4a1.6 1.6 0 01-1.6 1.6H6.6A1.6 1.6 0 015 18.4V5.6zm10.667 2.664H8.2v7.47h7.467v-7.47z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSpreadsheet;
