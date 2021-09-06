import * as React from "react";

function SvgGarage(props) {
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
        d="M4 9.517l-.29-.407a.5.5 0 00-.21.407H4zM11.724 4l.29-.407a.5.5 0 00-.58 0l.29.407zm7.724 5.517h.5a.5.5 0 00-.21-.407l-.29.407zM6.207 11.724v-.5h-.5v.5h.5zm11.034 0h.5v-.5h-.5v.5zM4.5 20V9.517h-1V20h1zM4.29 9.924l7.725-5.517-.582-.814L3.71 9.11l.582.814zm7.144-5.517l7.724 5.517.58-.814-7.723-5.517-.582.814zm7.514 5.11V20h1V9.517h-1zM6.707 20v-8.276h-1V20h1zm-.5-7.776H17.24v-1H6.207v1zm10.534-.5V20h1v-8.276h-1zm-10.534 3.81H17.24v-1H6.207v1zm3.862 2.207h3.31v-1h-3.31v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgGarage;
