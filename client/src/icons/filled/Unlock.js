import * as React from "react";

function SvgUnlock(props) {
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
        d="M8.8 10.933v-3.2a3.2 3.2 0 116.4 0v.534m-8.533 2.666h10.666c.59 0 1.067.478 1.067 1.067v6.4c0 .59-.478 1.067-1.067 1.067H6.667c-.59 0-1.067-.478-1.067-1.067V12c0-.59.478-1.067 1.067-1.067z"
        stroke="currentColor"
      />
      <path
        d="M17.333 10.933H6.667c-.59 0-1.067.478-1.067 1.067v6.4c0 .59.478 1.067 1.067 1.067h10.666c.59 0 1.067-.478 1.067-1.067V12c0-.59-.478-1.067-1.067-1.067z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUnlock;
