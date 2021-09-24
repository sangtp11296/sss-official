import * as React from "react";

function SvgContact(props) {
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
        d="M15.733 6.133H8.267V4H7.2v2.133H5.6a1.6 1.6 0 00-1.6 1.6v8.534a1.6 1.6 0 001.6 1.6h12.8a1.6 1.6 0 001.6-1.6V7.733a1.6 1.6 0 00-1.6-1.6h-1.6V4h-1.067v2.133zM7.2 10.4a2.133 2.133 0 114.267 0 2.133 2.133 0 01-4.267 0zm-.66 4.926a3.122 3.122 0 015.586 0l.351.702A.533.533 0 0112 16.8H6.667a.533.533 0 01-.477-.772l.35-.702zM13.6 10.4h3.2V9.333h-3.2V10.4zm0 3.2h3.2v-1.067h-3.2V13.6z"
        fill="currentColor"
      />
      <path d="M20 18.933V20H4v-1.067h16z" fill="currentColor" />
    </svg>
  );
}

export default SvgContact;
