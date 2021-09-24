import * as React from "react";

function SvgClipboardNoAccess(props) {
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
        d="M11.933 10.4a2.667 2.667 0 00-2.225 4.137l3.696-3.695a2.654 2.654 0 00-1.47-.442zM11.933 15.733a2.654 2.654 0 01-1.47-.442l3.695-3.695a2.667 2.667 0 01-2.225 4.137z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.2 4h7.467v1.067h3.2V18.4a1.6 1.6 0 01-1.6 1.6H6.6A1.6 1.6 0 015 18.4V5.067h3.2V4zm1.067 1.067H14.6v1.6a.533.533 0 01-.533.533H9.8a.533.533 0 01-.533-.533v-1.6zm-1.067 8a3.733 3.733 0 117.467 0 3.733 3.733 0 01-7.467 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgClipboardNoAccess;
