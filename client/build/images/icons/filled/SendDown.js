import * as React from "react";

function SvgSendDown(props) {
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
        d="M4 4.5h16v1H4v-1zm8.5 2.346v11.716l4.07-4.07.707.708-4.923 4.923a.5.5 0 01-.708 0L6.723 15.2l.707-.707 4.07 4.07V6.845h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSendDown;
