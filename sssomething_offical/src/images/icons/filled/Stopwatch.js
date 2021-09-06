import * as React from "react";

function SvgStopwatch(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.067 5.133h-3.4V4h3.4v1.133z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.367 6.267a7.367 7.367 0 100 14.733 7.367 7.367 0 000-14.733zm.566 6.8v-3.4H11.8V14.2h3.4v-1.133h-2.267z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgStopwatch;
