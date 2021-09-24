import * as React from "react";

function SvgSendRight(props) {
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
        d="M19.77 12l.353.353a.5.5 0 000-.707l-.354.354zm-.354-.354l-4.923 4.923.707.707 4.923-4.923-.707-.707zm.707 0L15.2 6.723l-.707.707 4.923 4.923.707-.707zm-.354-.146H6.846v1H19.77v-1zM4.5 4v16h1V4h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSendRight;
