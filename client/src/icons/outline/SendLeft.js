import * as React from "react";

function SvgSendLeft(props) {
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
        d="M5 12l-.354-.354a.5.5 0 000 .707L5 12zm.354.353l4.923-4.923-.707-.707-4.924 4.923.708.707zm-.708 0l4.924 4.923.707-.707-4.923-4.923-.708.707zM5 12.5h12.923v-1H5v1zM20.27 20V4h-1v16h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSendLeft;
