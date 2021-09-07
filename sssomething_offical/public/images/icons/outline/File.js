import * as React from "react";

function SvgFile(props) {
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
        d="M15.286 4l.353-.354-.146-.146h-.207V4zm3.428 3.429h.5V7.22l-.146-.146-.354.354zm-1.143 12.07H6.143v1H17.57v-1zM5.5 18.858V5.143h-1v13.714h1zM6.143 4.5h9.143v-1H6.143v1zm12.071 2.929v11.428h1V7.43h-1zm-3.282-3.076l3.429 3.43.707-.708-3.429-3.429-.707.707zM6.142 19.5a.643.643 0 01-.642-.643h-1c0 .907.736 1.643 1.643 1.643v-1zm11.43 1c.907 0 1.642-.736 1.642-1.643h-1a.643.643 0 01-.643.643v1zM5.5 5.143c0-.355.288-.643.643-.643v-1c-.907 0-1.643.735-1.643 1.643h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFile;
