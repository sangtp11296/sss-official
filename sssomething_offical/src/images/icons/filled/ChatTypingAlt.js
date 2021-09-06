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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 20h-8a8 8 0 118-8v8zM8 12.5h1.143v-1H8v1zm6.857 0H16v-1h-1.143v1zm-3.428 0h1.142v-1H11.43v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChatTypingAlt;
