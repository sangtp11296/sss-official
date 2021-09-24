import * as React from "react";

function SvgClipboardX(props) {
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
        d="M15.857 5.143h2.857v13.714c0 .631-.511 1.143-1.143 1.143H6.143A1.143 1.143 0 015 18.857V5.143h2.857m1.714 5.714l4.572 4.572m-4.572 0l4.572-4.572M8.429 4h6.857v2.286c0 .63-.512 1.143-1.143 1.143H9.57A1.143 1.143 0 018.43 6.286V4z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgClipboardX;
