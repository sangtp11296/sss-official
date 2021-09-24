import * as React from "react";

function SvgTickSmall(props) {
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
        d="M18 8.504L10.954 16 7 11.794l.474-.504 3.48 3.702L17.526 8l.474.504z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.526 7.781l.68.723-7.252 7.715-4.16-4.425.68-.723 3.48 3.702 6.572-6.992zm0 .438l-6.572 6.992-3.48-3.702-.268.285 3.747 3.987 6.841-7.277-.268-.285z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTickSmall;
