import * as React from "react";

function SvgSendRight(props) {
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
        d="M4.5 20V4h1v16h-1zM15.2 6.723l4.923 4.923a.5.5 0 010 .708L15.2 17.277l-.707-.707 4.07-4.07H6.845v-1h11.716l-4.07-4.07.708-.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSendRight;
