import * as React from "react";

function SvgClockwise(props) {
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
        d="M19.223 13.143v-.5h-1v.5h1zm-7.361-6.357h.5v-1h-.5v1zm1.143-.5l.354.353a.5.5 0 000-.707l-.354.354zm5.218 6.857a6.36 6.36 0 01-6.361 6.357v1a7.36 7.36 0 007.361-7.357h-1zM11.862 19.5A6.36 6.36 0 015.5 13.143h-1a7.36 7.36 0 007.362 7.357v-1zM5.5 13.143a6.36 6.36 0 016.362-6.357v-1A7.36 7.36 0 004.5 13.143h1zm4.865-8.79l2.287 2.286.707-.707-2.287-2.286-.707.708zm2.287 1.579l-2.287 2.286.707.707 2.287-2.286-.707-.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClockwise;
