import * as React from "react";

function SvgRss(props) {
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
        d="M18.933 20c0-8.248-6.685-14.933-14.933-14.933V4c8.837 0 16 7.163 16 16h-1.067z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 18.4a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0z"
        fill="currentColor"
      />
      <path
        d="M13.6 20A9.6 9.6 0 004 10.4v1.067A8.533 8.533 0 0112.533 20H13.6z"
        fill="currentColor"
      />
      <path
        d="M18.933 20c0-8.248-6.685-14.933-14.933-14.933V4c8.837 0 16 7.163 16 16h-1.067z"
        stroke="currentColor"
        strokeWidth={0.5}
      />
      <path
        clipRule="evenodd"
        d="M4 18.4a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0z"
        stroke="currentColor"
        strokeWidth={0.5}
      />
      <path
        d="M13.6 20A9.6 9.6 0 004 10.4v1.067A8.533 8.533 0 0112.533 20H13.6z"
        stroke="currentColor"
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgRss;
