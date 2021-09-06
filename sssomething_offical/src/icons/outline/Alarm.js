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
        d="M4 7.643L7.643 4m9.714 0L21 7.643m-8.5 1.821v4.25h3.036M12.5 6.43A7.286 7.286 0 1012.5 21a7.286 7.286 0 000-14.571z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgAlarm;
