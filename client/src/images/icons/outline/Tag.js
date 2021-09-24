import * as React from "react";

function SvgTag(props) {
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
        d="M4 12l-.354-.354a.5.5 0 000 .708L4 12zm8 8l-.354.354a.5.5 0 00.708 0L12 20zm8-8l.354.354A.5.5 0 0020.5 12H20zm-8-8v-.5a.5.5 0 00-.354.146L12 4zm-8.354 8.354l8 8 .708-.708-8-8-.708.708zm8.708 8l8-8-.708-.708-8 8 .708.708zM20.5 12V5.143h-1V12h1zm-1.643-8.5H12v1h6.857v-1zm-7.21.146l-8 8 .707.708 8-8-.708-.708zM20.5 5.143c0-.907-.735-1.643-1.643-1.643v1c.355 0 .643.288.643.643h1zm-5.071 4.071a.643.643 0 01-.643-.643h-1c0 .908.735 1.643 1.643 1.643v-1zm.642-.643a.643.643 0 01-.642.643v1c.907 0 1.642-.735 1.642-1.643h-1zm-.642-.642c.355 0 .642.287.642.642h1c0-.907-.735-1.642-1.642-1.642v1zm0-1c-.908 0-1.643.735-1.643 1.642h1c0-.355.287-.642.643-.642v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTag;
