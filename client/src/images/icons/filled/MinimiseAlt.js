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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.354 4.354l-4.48 4.48h3.46v1h-4.667a.5.5 0 01-.5-.5V4.666h1v3.46l4.48-4.48.707.707zM4.667 14.167h4.666a.5.5 0 01.5.5v4.666h-1v-3.46l-4.48 4.48-.707-.707 4.48-4.48h-3.46v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMinimiseAlt;
