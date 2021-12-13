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
        d="M5.517 18.448a1.035 1.035 0 102.07 0 1.035 1.035 0 00-2.07 0zM20 20c0-8.284-6.716-15-15-15M5 11.207A8.793 8.793 0 0113.793 20"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgRss;
