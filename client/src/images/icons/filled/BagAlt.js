import * as React from "react";

function SvgBagAlt(props) {
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
        d="M5 5.517C5 4.679 5.68 4 6.517 4H16.63c.838 0 1.517.68 1.517 1.517v12.136c0 .838-.679 1.517-1.517 1.517H6.517C5.679 19.17 5 18.49 5 17.653V5.517zm9.102 3.034a2.528 2.528 0 11-5.057 0V6.023H8.034V8.55a3.54 3.54 0 107.08 0V6.023h-1.012V8.55z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBagAlt;
