import * as React from "react";

function SvgAlarm(props) {
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
        d="M8.033 4.77L4.769 8.032 4 7.263 7.264 4l.769.77zM19.23 8.033l-3.263-3.264.77-.769L20 7.264l-.77.769z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.929 13.088a7.071 7.071 0 1114.142 0 7.071 7.071 0 01-14.142 0zm7.615-.544V9.28h-1.088v4.352h3.264v-1.088h-2.176z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAlarm;
