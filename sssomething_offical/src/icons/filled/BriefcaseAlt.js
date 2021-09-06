import * as React from "react";

function SvgBriefcaseAlt(props) {
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
        d="M9.333 6.667V7.2H5.6A1.6 1.6 0 004 8.8v9.6A1.6 1.6 0 005.6 20h12.8a1.6 1.6 0 001.6-1.6V8.8a1.6 1.6 0 00-1.6-1.6h-3.733v-.533a2.667 2.667 0 00-5.334 0zM12 5.067a1.6 1.6 0 00-1.6 1.6V7.2h3.2v-.533a1.6 1.6 0 00-1.6-1.6zm-7.295 6.792a10.755 10.755 0 0014.59 0l-.723-.784a9.689 9.689 0 01-13.144 0l-.723.784z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBriefcaseAlt;
