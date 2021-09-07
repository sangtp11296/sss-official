import * as React from "react";

function SvgAntiClockwise(props) {
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
        d="M10.718 6.286l-.354-.354a.5.5 0 000 .707l.354-.353zm1.144-.5h-.5v1h.5v-1zM5.5 13.143v-.5h-1v.5h1zm7.15-9.497l-2.286 2.286.707.707 2.287-2.285-.708-.708zM10.364 6.64l2.286 2.286.708-.707-2.287-2.286-.707.707zm1.498.147a6.36 6.36 0 016.361 6.357h1a7.36 7.36 0 00-7.361-7.357v1zm6.361 6.357a6.36 6.36 0 01-6.361 6.357v1a7.36 7.36 0 007.361-7.357h-1zM11.862 19.5A6.36 6.36 0 015.5 13.143h-1a7.36 7.36 0 007.362 7.357v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAntiClockwise;
