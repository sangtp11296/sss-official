import * as React from "react";

function SvgSearchProperty(props) {
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
        d="M20.354 19.646l-4.572-4.571-.707.707 4.571 4.571.707-.707z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.857 17.714a6.857 6.857 0 110-13.714 6.857 6.857 0 010 13.714zm-2.286-4.571h4.572v-2.857L10.857 8l-2.286 2.286v2.857z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSearchProperty;
