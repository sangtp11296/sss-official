import * as React from "react";

function SvgUnlockSmall(props) {
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
        d="M14.594 6.594l.354-.353-.354.353zM8.8 10.9h6.4v-1H8.8v1zm7.5 1.1v4.8h1V12h-1zm-1.1 5.9H8.8v1h6.4v-1zm-7.5-1.1V12h-1v4.8h1zm1.1 1.1a1.1 1.1 0 01-1.1-1.1h-1c0 1.16.94 2.1 2.1 2.1v-1zm7.5-1.1a1.1 1.1 0 01-1.1 1.1v1a2.1 2.1 0 002.1-2.1h-1zm-1.1-5.9a1.1 1.1 0 011.1 1.1h1a2.1 2.1 0 00-2.1-2.1v1zm-6.4-1A2.1 2.1 0 006.7 12h1a1.1 1.1 0 011.1-1.1v-1zm.5.5V8.994h-1V10.4h1zm4.94-3.452l.606.606.708-.707-.606-.606-.707.707zM12.195 6.1c.768 0 1.504.305 2.047.848l.707-.707a3.894 3.894 0 00-2.754-1.14v1zM9.3 8.994A2.894 2.894 0 0112.194 6.1v-1A3.894 3.894 0 008.3 8.994h1z"
        fill="currentColor"
      />
      <path
        d="M15.2 10.4H8.8A1.6 1.6 0 007.2 12v4.8a1.6 1.6 0 001.6 1.6h6.4a1.6 1.6 0 001.6-1.6V12a1.6 1.6 0 00-1.6-1.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUnlockSmall;
