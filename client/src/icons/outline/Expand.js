import * as React from "react";

function SvgExpand(props) {
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
        d="M20 20v.5a.5.5 0 00.5-.5H20zm0-15h.5a.5.5 0 00-.5-.5V5zM5 5v-.5a.5.5 0 00-.5.5H5zm0 15h-.5a.5.5 0 00.5.5V20zm15-.5h-4.375v1H20v-1zm.5.5v-4.375h-1V20h1zm-.146-.353l-5-5-.708.707 5 5 .707-.707zM15.625 5.5H20v-1h-4.375v1zM19.5 5v4.375h1V5h-1zm-4.146 5.354l5-5-.708-.707-5 5 .708.707zM9.375 4.5H5v1h4.375v-1zM4.5 5v4.375h1V5h-1zm.146.354l5 5 .708-.707-5-5-.708.707zM4.5 15.625V20h1v-4.375h-1zM5 20.5h4.375v-1H5v1zm.354-.146l5-5-.708-.707-5 5 .708.707z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgExpand;
