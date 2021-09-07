import * as React from "react";

function SvgChatTypingAlt(props) {
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
        d="M11.429 12h1.142M8 12h1.143m5.714 0H16m4 8h-8a8 8 0 118-8v8z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgChatTypingAlt;
