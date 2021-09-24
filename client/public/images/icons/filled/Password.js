import * as React from "react";

function SvgPassword(props) {
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
        d="M15.733 15.733h-1.066v-1.066h1.066v1.066zM12.533 15.733H13.6v-1.066h-1.067v1.066zM17.867 15.733H16.8v-1.066h1.067v1.066z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.2 10.4V7.733a3.733 3.733 0 117.467 0V10.4h1.6a1.6 1.6 0 011.6 1.6v.587a2.668 2.668 0 010 5.226v.587a1.6 1.6 0 01-1.6 1.6H5.6A1.6 1.6 0 014 18.4V12a1.6 1.6 0 011.6-1.6h1.6zm1.067-2.667a2.667 2.667 0 115.333 0V10.4H8.267V7.733zm4.8 5.867a1.6 1.6 0 100 3.2h4.266a1.6 1.6 0 100-3.2h-4.266z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPassword;
