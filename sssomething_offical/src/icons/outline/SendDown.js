import * as React from "react";

function SvgSendDown(props) {
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
        d="M12 19.77l-.354.353a.5.5 0 00.708 0L12 19.769zm.354-.354L7.43 14.493l-.707.707 4.923 4.923.708-.707zm0 .707l4.923-4.923-.707-.707-4.924 4.923.708.707zm.146-.354V6.846h-1V19.77h1zM20 4.5H4v1h16v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSendDown;
