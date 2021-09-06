import * as React from "react";

function SvgQrCode(props) {
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
        d="M16.69 12.828h-3.862v3.862m6.069-3.862H20m-3.31 6.62h-4.414m3.31-3.31h3.862V20"
        stroke="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.517 4H5.103C4.494 4 4 4.494 4 5.103v4.414c0 .61.494 1.104 1.103 1.104h4.414c.61 0 1.104-.494 1.104-1.104V5.103C10.62 4.494 10.127 4 9.517 4zm8.828 0H13.93c-.61 0-1.103.494-1.103 1.103v4.414c0 .61.494 1.104 1.103 1.104h4.414c.61 0 1.103-.494 1.103-1.104V5.103c0-.609-.494-1.103-1.103-1.103zM5.103 12.828h4.414c.61 0 1.104.494 1.104 1.103v4.414c0 .61-.494 1.103-1.104 1.103H5.103c-.609 0-1.103-.494-1.103-1.103V13.93c0-.61.494-1.103 1.103-1.103zM6.76 7.81h1.103v-1H6.76v1zm8.827 0h1.104v-1h-1.104v1zM6.76 16.638h1.103v-1H6.76v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgQrCode;
