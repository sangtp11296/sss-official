import * as React from "react";

function SvgAppointment02(props) {
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
        d="M18.4 6.133h-1.6V4h-1.067v2.133H8.267V4H7.2v2.133H5.6a1.6 1.6 0 00-1.6 1.6V18.4A1.6 1.6 0 005.6 20h12.8a1.6 1.6 0 001.6-1.6V7.733a1.6 1.6 0 00-1.6-1.6zM8.267 13.067a3.733 3.733 0 117.466 0 3.733 3.733 0 01-7.466 0z"
        fill="currentColor"
      />
      <path
        d="M12 10a3 3 0 00-2.503 4.654s.374.535.849.849a3 3 0 004.157-4.157c-.314-.475-.849-.849-.849-.849A2.986 2.986 0 0012 10z"
        fill="currentColor"
      />
      <path
        d="M12 11v2h1.5"
        stroke="#fff"
        strokeWidth={0.7}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgAppointment02;
