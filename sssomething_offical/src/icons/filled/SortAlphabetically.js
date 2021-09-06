import * as React from "react";

function SvgSortAlphabetically(props) {
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
        d="M7.81 18.793V4h1v14.793l2.457-2.457.707.707-3.31 3.31a.5.5 0 01-.707 0l-3.31-3.31.707-.707 2.456 2.457zm9.328-13.741c-.943 0-1.707.764-1.707 1.707v1.707h3.414V6.759c0-.943-.764-1.707-1.707-1.707zm1.707 4.414v2.258h1V6.76a2.707 2.707 0 10-5.414 0v4.965h1V9.466h3.414zm-4.414 3.413h3.259a2.155 2.155 0 011.38 3.81 2.155 2.155 0 01-1.38 3.81H14.43v-7.62zm3.259 3.31a1.155 1.155 0 000-2.31H15.43v2.31h2.259zm-2.259 1h2.259a1.155 1.155 0 110 2.311H15.43v-2.31z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSortAlphabetically;
