import * as React from "react";

function SvgThumbtack(props) {
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
        d="M4 20l5.143-5.143M4 9.714L14.286 20M13.143 4L20 10.857m-14.857 0l9.143-5.714m-1.143 13.714l5.714-9.143"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgThumbtack;
