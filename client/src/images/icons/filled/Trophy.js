import * as React from "react";

function SvgTrophy(props) {
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
        d="M9.1 4a1.7 1.7 0 00-1.7 1.7v.567h-.567a2.833 2.833 0 100 5.666h.857a5.105 5.105 0 004.243 3.37v4.564h-3.4V21h7.934v-1.133h-3.4v-4.565a5.105 5.105 0 004.243-3.369h.857a2.833 2.833 0 100-5.666H17.6V5.7A1.7 1.7 0 0015.9 4H9.1zm8.5 3.4v2.833c0 .192-.01.38-.031.567h.598a1.7 1.7 0 100-3.4H17.6zm-10.767 0H7.4v2.833c0 .192.01.38.031.567h-.598a1.7 1.7 0 110-3.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTrophy;
