import * as React from "react";

function SvgBookmark(props) {
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
        d="M17.429 20l-.313.39a.5.5 0 00.813-.39h-.5zm0-16h.5v-.5h-.5V4zM6 4v-.5h-.5V4H6zm0 16h-.5a.5.5 0 00.812.39L6 20zm5.714-4.571l.313-.39a.5.5 0 00-.625 0l.312.39zM17.93 20V4h-1v16h1zM5.5 4v16h1V4h-1zm.812 16.39l5.715-4.571-.625-.78-5.714 4.57.624.781zm5.09-4.571l5.714 4.571.625-.78-5.714-4.572-.625.781zM17.429 3.5H6v1h11.429v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBookmark;
