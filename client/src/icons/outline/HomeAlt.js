import * as React from "react";

function SvgHomeAlt(props) {
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
        d="M12.257 3.8l.354-.354a.5.5 0 00-.707 0l.353.354zM5.4 10.657l-.354-.353-.146.146v.207h.5zm13.714 0h.5v-.207l-.146-.146-.354.353zm.354-.353L12.61 3.446l-.707.708 6.857 6.857.707-.707zm-7.564-6.858l-6.858 6.858.708.707 6.857-6.857-.707-.708zm7.71 15.211v-8h-1v8h1zm-14.714-8v8h1v-8h-1zM6.543 20.3H17.97v-1H6.543v1zm12.071-1.643a.643.643 0 01-.643.643v1c.908 0 1.643-.736 1.643-1.643h-1zm-13.714 0c0 .907.736 1.643 1.643 1.643v-1a.643.643 0 01-.643-.643h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHomeAlt;
