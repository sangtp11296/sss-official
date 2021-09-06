import * as React from "react";

function SvgEye(props) {
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
        d="M12 17.429c-5.714 0-8-5.715-8-5.715S6.286 6 12 6s8 5.714 8 5.714-2.286 5.715-8 5.715z"
        fill="currentColor"
      />
      <path
        d="M9.714 11.714a2.286 2.286 0 104.572 0 2.286 2.286 0 00-4.572 0z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgEye;
