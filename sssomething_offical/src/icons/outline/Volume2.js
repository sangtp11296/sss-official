import * as React from "react";

function SvgVolume2(props) {
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
        d="M8.003 16l.257-.429-.119-.071h-.138v.5zm0-8v.5h.138l.119-.071L8.003 8zm6.67-4h.5a.5.5 0 00-.757-.429l.258.429zm0 16l-.257.429a.5.5 0 00.758-.429h-.5zm-6.67-4.5H5.334v1h2.669v-1zm-2.669 0a.833.833 0 01-.834-.833h-1c0 1.014.822 1.833 1.834 1.833v-1zm-.834-.833V9.333h-1v5.334h1zm0-5.334c0-.46.373-.833.834-.833v-1C4.322 7.5 3.5 8.32 3.5 9.333h1zm.834-.833h2.669v-1H5.334v1zm2.926-.071l6.67-4-.514-.858-6.67 4 .514.858zM14.174 4v16h1V4h-1zm.757 15.571l-6.671-4-.515.858 6.671 4 .515-.858zm1.911-9.567v4.003h1v-4.003h-1zm2.668-2.668v9.339h1v-9.34h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVolume2;
