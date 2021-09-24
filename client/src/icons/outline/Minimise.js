import * as React from "react";

function SvgMinimise(props) {
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
        d="M14.667 14.667v-.5a.5.5 0 00-.5.5h.5zm0-5.334h-.5a.5.5 0 00.5.5v-.5zm-5.334 0v.5a.5.5 0 00.5-.5h-.5zm0 5.334h.5a.5.5 0 00-.5-.5v.5zm5.334.5h4.666v-1h-4.666v1zm-.5-.5v4.667h1v-4.667h-1zm6.187 4.98l-5.334-5.334-.707.707 5.333 5.334.708-.707zm-1.02-10.814h-4.667v1h4.666v-1zm-4.167.5V4.667h-1v4.666h1zm-.147.354l5.334-5.333-.708-.707-5.333 5.333.707.707zm-10.353.146h4.666v-1H4.667v1zm5.166-.5V4.667h-1v4.666h1zm-6.187-4.98L8.98 9.688l.707-.707-5.333-5.333-.708.707zm6.187 14.98v-4.666h-1v4.667h1zm-.5-5.166H4.667v1h4.666v-1zm-4.98 6.187l5.334-5.334-.707-.707-5.334 5.334.708.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMinimise;
