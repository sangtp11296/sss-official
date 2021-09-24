import * as React from "react";

function SvgCalendarNoAccess(props) {
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
        d="M12 10.4a2.667 2.667 0 00-2.225 4.137l3.696-3.695A2.654 2.654 0 0012 10.4zM12 15.733a2.654 2.654 0 01-1.47-.442l3.695-3.695A2.667 2.667 0 0112 15.733z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4 6.133h-1.6V4h-1.067v2.133H8.267V4H7.2v2.133H5.6a1.6 1.6 0 00-1.6 1.6V18.4A1.6 1.6 0 005.6 20h12.8a1.6 1.6 0 001.6-1.6V7.733a1.6 1.6 0 00-1.6-1.6zM8.267 13.067a3.733 3.733 0 117.466 0 3.733 3.733 0 01-7.466 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCalendarNoAccess;
