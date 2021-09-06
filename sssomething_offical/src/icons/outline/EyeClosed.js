import * as React from "react";

function SvgEyeClosed(props) {
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
        d="M12.5 14.357C7.143 14.357 5 9 5 9m7.5 5.357C17.857 14.357 20 9 20 9m-7.5 5.357v2.679m-6.964-2.143l2.143-2.143m9.642 0l2.143 2.143"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgEyeClosed;
