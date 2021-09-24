import * as React from "react";

function SvgEditSmall(props) {
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
        d="M7.2 13.6l-.354-.354-.146.147v.207h.5zm6.4-6.4l.354-.354a.5.5 0 00-.708 0l.354.354zm3.2 3.2l.354.354a.5.5 0 000-.708l-.354.354zm-6.4 6.4v.5h.207l.147-.146-.354-.354zm-3.2 0h-.5a.5.5 0 00.5.5v-.5zm.354-2.847l6.4-6.4-.708-.707-6.4 6.4.708.707zm5.692-6.4l3.2 3.2.708-.707-3.2-3.2-.708.707zm3.2 2.493l-6.4 6.4.708.707 6.4-6.4-.708-.707zM10.4 16.3H7.2v1h3.2v-1zm-2.7.5v-3.2h-1v3.2h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEditSmall;
