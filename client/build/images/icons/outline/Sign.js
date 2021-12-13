import * as React from "react";

function SvgSign(props) {
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
        d="M8.143 10.286v-.5a.5.5 0 00-.5.5h.5zm11.428 0h.5a.5.5 0 00-.5-.5v.5zm0 6.857v.5a.5.5 0 00.5-.5h-.5zm-11.428 0h-.5a.5.5 0 00.5.5v-.5zM4.214 4v16h1V4h-1zM3 7.357h17.143v-1H3v1zm5.143 3.429H19.57v-1H8.143v1zm10.928-.5v6.857h1v-6.857h-1zm.5 6.357H8.143v1H19.57v-1zm-10.928.5v-6.857h-1v6.857h1zM9.929 6.857v3.429h1V6.857h-1zm6.857 0v3.429h1V6.857h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSign;
