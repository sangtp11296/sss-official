import * as React from "react";

function SvgChat(props) {
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
        d="M16.571 18.857c-1.204.725-3.061 1.133-4.571 1.133-4.418 0-8-3.58-8-7.995A7.997 7.997 0 0112 4c4.418 0 8 3.58 8 7.995 0 1.584-.349 3.335-1.143 4.576"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.571 18.857L20 19.99l-1.143-3.419"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgChat;
