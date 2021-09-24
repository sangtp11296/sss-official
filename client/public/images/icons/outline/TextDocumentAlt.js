import * as React from "react";

function SvgTextDocumentAlt(props) {
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
        d="M8.929 11.995h-.5v1h.5v-1zm6.857 1h.5v-1h-.5v1zm-6.857 2.434h-.5v1h.5v-1zm6.857 1h.5v-1h-.5v1zm-6.857-7.86h-.5v1h.5v-1zm6.857 1h.5v-1h-.5v1zm3.428-1.64h.5V7.72l-.146-.146-.354.354zM15.786 4.5l.353-.354L15.993 4h-.207v.5zm-6.857 8.495h6.857v-1H8.929v1zm0 3.434h6.857v-1H8.929v1zm0-6.86h6.857v-1H8.929v1zM18.07 20H6.643v1H18.07v-1zM6 19.357V5.643H5v13.714h1zM18.714 7.93v11.428h1V7.93h-1zM6.643 5h9.143V4H6.643v1zm8.79-.146l3.428 3.428.707-.707-3.429-3.429-.707.708zM6.642 20A.643.643 0 016 19.357H5C5 20.265 5.736 21 6.643 21v-1zm11.428 1c.908 0 1.643-.735 1.643-1.643h-1a.643.643 0 01-.643.643v1zM6 5.643C6 5.288 6.288 5 6.643 5V4C5.736 4 5 4.736 5 5.643h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTextDocumentAlt;
