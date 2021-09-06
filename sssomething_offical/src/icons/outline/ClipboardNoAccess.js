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
        d="M15.857 5.143h2.857v13.714c0 .631-.511 1.143-1.143 1.143H6.143A1.143 1.143 0 015 18.857V5.143h2.857m6.286 5.714L9.57 15.43M8.43 4h6.857v2.286c0 .63-.512 1.143-1.143 1.143H9.57A1.143 1.143 0 018.43 6.286V4zm3.428 12.571a3.429 3.429 0 110-6.857 3.429 3.429 0 010 6.857z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgClipboardNoAccess;
