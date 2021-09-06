import * as React from "react";

function SvgTwitch(props) {
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
        d="M4 4v-.5a.5.5 0 00-.5.5H4zm16 0h.5a.5.5 0 00-.5-.5V4zm0 9.143l.354.353a.5.5 0 00.146-.353H20zm-3.429 3.428v.5a.5.5 0 00.354-.146l-.354-.354zm-5.714 0v-.5a.5.5 0 00-.325.12l.325.38zm-4 3.429h-.5a.5.5 0 00.826.38L6.857 20zm0-3.429h.5a.5.5 0 00-.5-.5v.5zm-2.857 0h-.5a.5.5 0 00.5.5v-.5zM4 4.5h16v-1H4v1zM19.5 4v9.143h1V4h-1zm.146 8.79l-3.428 3.428.707.707 3.429-3.429-.708-.707zm-3.075 3.281h-5.714v1h5.714v-1zm-6.04.12l-4 3.43.652.759 4-3.429-.651-.76zM7.358 20v-3.429h-1V20h1zm-.5-3.929H4v1h2.857v-1zm-2.357.5V4h-1v12.571h1zm10.429-9.714v5.714h1V6.857h-1zm-3.429 0v5.714h1V6.857h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTwitch;
