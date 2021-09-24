import * as React from "react";

function SvgMessageText(props) {
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
        d="M12 19.99l-2.286-3.427H5.143c-.632 0-1.143-.51-1.143-1.142V5.142C4 4.511 4.51 4 5.143 4h13.714C19.49 4 20 4.51 20 5.142v10.28c0 .63-.51 1.141-1.143 1.141h-4.571L12 19.99zM8 9.07h8v-1H8v1zM9.143 12.5h5.714v-1H9.143v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessageText;
