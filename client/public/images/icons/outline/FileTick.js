import * as React from "react";

function SvgFileTick(props) {
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
        d="M9 12l2.286 2.286 4-4.572m0-5.714H6.143C5.512 4 5 4.512 5 5.143v13.714C5 19.488 5.512 20 6.143 20H17.57c.632 0 1.143-.512 1.143-1.143V7.43l-3.428-3.43z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgFileTick;
