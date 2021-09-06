import * as React from "react";

function SvgKanban(props) {
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
        d="M3.571 7.429v-.5a.5.5 0 00-.5.5h.5zm6.858 0h.5a.5.5 0 00-.5-.5v.5zm0 12.571v.5a.5.5 0 00.5-.5h-.5zM3.57 20h-.5a.5.5 0 00.5.5V20zm9.143-12.571v-.5a.5.5 0 00-.5.5h.5zm6.857 0h.5a.5.5 0 00-.5-.5v.5zm0 6.857v.5a.5.5 0 00.5-.5h-.5zm-6.857 0h-.5a.5.5 0 00.5.5v-.5zM3 4.5h8v-1H3v1zm9.143 0h8v-1h-8v1zM3.57 7.929h6.858v-1H3.57v1zm6.358-.5V20h1V7.429h-1zm.5 12.071H3.57v1h6.858v-1zM4.07 20V7.429h-1V20h1zm8.643-12.071h6.857v-1h-6.857v1zm6.357-.5v6.857h1V7.429h-1zm.5 6.357h-6.857v1h6.857v-1zm-6.357.5V7.429h-1v6.857h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgKanban;
