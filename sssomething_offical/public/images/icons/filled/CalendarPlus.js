import * as React from "react";

function SvgCalendarPlus(props) {
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
        d="M18.4 6.133h-1.6V4h-1.067v2.133H8.267V4H7.2v2.133H5.6a1.6 1.6 0 00-1.6 1.6V18.4A1.6 1.6 0 005.6 20h12.8a1.6 1.6 0 001.6-1.6V7.733a1.6 1.6 0 00-1.6-1.6zm-6.933 9.6V13.6H9.333v-1.067h2.134V10.4h1.066v2.133h2.134V13.6h-2.134v2.133h-1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCalendarPlus;
