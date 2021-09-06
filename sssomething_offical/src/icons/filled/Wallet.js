import * as React from "react";

function SvgWallet(props) {
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
        d="M18.933 17.267V14.6h.46a.607.607 0 00.607-.607v-4.12a.607.607 0 00-.607-.606h-.46V6.6a1.6 1.6 0 00-1.6-1.6H5.6A1.6 1.6 0 004 6.6v10.667a1.6 1.6 0 001.6 1.6h11.733a1.6 1.6 0 001.6-1.6zm0-6.934v3.2h-4.8a1.6 1.6 0 010-3.2h4.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgWallet;
