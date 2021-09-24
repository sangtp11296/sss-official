import * as React from "react";

function SvgSoundOff(props) {
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
        d="M7.003 16H4.334A1.333 1.333 0 013 14.667V9.333C3 8.596 3.596 8 4.334 8h2.669l6.67-4v16l-6.67-4z"
        fill="currentColor"
      />
      <path
        d="M17.477 9.761l-.353-.353-.707.707.353.353.707-.707zm3.067 4.478l.353.353.707-.707-.354-.353-.706.707zm.707-3.77l.353-.354-.706-.707-.354.353.707.707zm-4.48 3.063l-.354.353.707.707.354-.353-.707-.707zm.353-3.417l-.354.353.002.002.005.005.02.02.075.075.28.28.952.952 2.44 2.437.706-.707a64987.748 64987.748 0 00-3.39-3.389l-.281-.28-.076-.076-.02-.02-.004-.004-.001-.002-.354.354zm3.42-.354l-3.773 3.77.706.708 3.774-3.77-.707-.708z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSoundOff;
