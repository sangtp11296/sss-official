import * as React from "react";

function SvgHouse(props) {
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
        d="M4 9.517l-.29-.407-.21.15v.257H4zM11.724 4l.29-.407a.5.5 0 00-.58 0l.29.407zm7.724 5.517h.5V9.26l-.21-.15-.29.407zm-13.241 3.31v-.5h-.5v.5h.5zm4.414 0h.5v-.5h-.5v.5zM4.5 20V9.517h-1V20h1zM4.29 9.924l7.725-5.517-.582-.814L3.71 9.11l.582.814zm7.144-5.517l7.724 5.517.58-.814-7.723-5.517-.582.814zm7.514 5.11V20h1V9.517h-1zM6.707 20v-7.172h-1V20h1zm-.5-6.672h4.414v-1H6.207v1zm3.914-.5V20h1v-7.172h-1zm-1.155 3.81h1.655v-1H8.966v1zm6.672-4.362v4.414h1v-4.414h-1zm2.207-6.62v2.758h1V5.655h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHouse;
