import * as React from "react";

function SvgWalletAlt(props) {
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
        d="M4 6.6A1.6 1.6 0 015.6 5h8.533a1.6 1.6 0 011.6 1.6v.533H18.4a1.6 1.6 0 011.6 1.6v8.534a1.6 1.6 0 01-1.6 1.6H5.6a1.6 1.6 0 01-1.6-1.6V6.6zm9.6 8h3.2v-1.067h-3.2V14.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWalletAlt;
