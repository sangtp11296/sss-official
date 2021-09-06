import * as React from "react";

function SvgMinimiseAlt(props) {
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
        d="M14.667 9.333h-.5a.5.5 0 00.5.5v-.5zm-5.334 5.334h.5a.5.5 0 00-.5-.5v.5zm10-5.834h-4.666v1h4.666v-1zm-4.166.5V4.667h-1v4.666h1zm-.147.354l5.334-5.333-.708-.707-5.333 5.333.707.707zm-5.187 9.647v-4.667h-1v4.667h1zm-.5-5.167H4.667v1h4.666v-1zm-4.98 6.187l5.334-5.334-.707-.707-5.334 5.334.708.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMinimiseAlt;
