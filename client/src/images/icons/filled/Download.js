import * as React from "react";

function SvgDownload(props) {
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
        d="M11.5 14.941V5h1v9.876l2.646-2.646.708.707-3.5 3.5a.5.5 0 01-.693.014l-3.792-3.5.678-.735L11.5 14.94zM5.5 12v6.583a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V12h1v6.583a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5V12h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDownload;
