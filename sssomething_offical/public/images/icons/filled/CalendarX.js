import * as React from "react";

function SvgCalendarX(props) {
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
        d="M18.4 6.133h-1.6V4h-1.067v2.133H8.267V4H7.2v2.133H5.6a1.6 1.6 0 00-1.6 1.6V18.4A1.6 1.6 0 005.6 20h12.8a1.6 1.6 0 001.6-1.6V7.733a1.6 1.6 0 00-1.6-1.6zm-4.644 9.444L12 13.821l-1.756 1.756-.754-.754 1.756-1.756L9.49 11.31l.754-.754L12 12.312l1.756-1.756.755.754-1.757 1.757 1.757 1.756-.755.754z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCalendarX;
