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
      <path
        d="M12.286 9.464v4.25h3.035M10.464 4h3.643m-1.821 2.429a7.286 7.286 0 100 14.571 7.286 7.286 0 000-14.571z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgStopwatch;
