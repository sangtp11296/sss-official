import * as React from "react";

function SvgSignIn(props) {
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
        d="M16.083 12l.368.34a.5.5 0 00-.014-.693l-.354.353zm-.367-.339l-3.5 3.792.735.678 3.5-3.792-.735-.678zm.72-.014l-3.5-3.5-.706.707 3.5 3.5.707-.707zM5 12.5h11.083v-1H5v1zM20.083 18V6h-1v12h1zm-1.5-13.5H12v1h6.583v-1zm0 14H12v1h6.583v-1zm1.5-12.5a1.5 1.5 0 00-1.5-1.5v1a.5.5 0 01.5.5h1zm-1 12a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSignIn;
