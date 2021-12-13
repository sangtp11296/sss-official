import * as React from "react";

function SvgFolderNoAccess(props) {
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
        d="M14.286 10.714l-4.572 4.572M4 6.143V17.57c0 .632.512 1.143 1.143 1.143h13.714c.631 0 1.143-.511 1.143-1.143V8.43c0-.632-.512-1.143-1.143-1.143H12L9.714 5H5.143C4.512 5 4 5.512 4 6.143zm8 10.286a3.429 3.429 0 110-6.858 3.429 3.429 0 010 6.858z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgFolderNoAccess;
