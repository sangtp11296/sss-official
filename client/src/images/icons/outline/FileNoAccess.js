import * as React from "react";

function SvgFileNoAccess(props) {
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
        d="M14.143 9.714L9.57 14.286M15.286 4H6.143C5.512 4 5 4.512 5 5.143v13.714C5 19.488 5.512 20 6.143 20H17.57c.632 0 1.143-.512 1.143-1.143V7.43l-3.428-3.43zm-3.429 11.428a3.429 3.429 0 110-6.857 3.429 3.429 0 010 6.857z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgFileNoAccess;
