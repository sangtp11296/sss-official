import * as React from "react";

function SvgSendUp(props) {
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
        d="M12 5l.354-.353a.5.5 0 00-.708 0L12 5zm-.354.354l4.924 4.923.707-.707-4.923-4.923-.708.707zm0-.707L6.723 9.57l.707.707 4.924-4.923-.708-.707zM11.5 5v12.923h1V5h-1zM4 20.27h16v-1H4v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSendUp;
