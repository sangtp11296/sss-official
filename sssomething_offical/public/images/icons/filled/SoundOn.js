import * as React from "react";

function SvgSoundOn(props) {
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
        d="M7.003 16H4.334A1.333 1.333 0 013 14.667V9.333C3 8.596 3.598 8 4.334 8h2.669l6.67-4v16l-6.67-4z"
        fill="currentColor"
      />
      <path
        d="M20.698 7.646l-.354-.353-.707.707.354.354.707-.708zm-.707 8l-.354.354.707.707.354-.353-.707-.708zM20.345 8l-.354.353-.002-.001.006.006.03.034c.03.033.074.085.128.158.11.146.26.37.412.674.302.605.614 1.53.614 2.776h1c0-1.42-.356-2.496-.72-3.224a5.429 5.429 0 00-.506-.826 3.726 3.726 0 00-.255-.303L20.345 8zm.834 4c0 1.247-.311 2.17-.614 2.776a4.431 4.431 0 01-.412.674 2.705 2.705 0 01-.158.192l-.006.006h.001v-.001l.355.353.353.353.002-.001.002-.002.005-.006a1.52 1.52 0 00.071-.077c.044-.05.105-.123.175-.217.141-.188.324-.463.506-.826.364-.728.72-1.804.72-3.224h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSoundOn;
