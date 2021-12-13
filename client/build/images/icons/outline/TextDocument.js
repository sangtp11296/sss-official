import * as React from "react";

function SvgTextDocument(props) {
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
        d="M8.929 11.995h-.5v1h.5v-1zm6.857 1h.5v-1h-.5v1zM8.929 15.42h-.5l-.001 1h.5l.001-1zm6.856 1.008h.5l.001-1h-.5v1zM8.93 8.569h-.5v1h.5v-1zm4.57 1.002h.5l.001-1h-.5v1zM15.787 4.5l.353-.354L15.993 4h-.207v.5zm3.428 3.429h.5V7.72l-.146-.146-.354.354zM8.93 12.995h6.857v-1H8.929v1zm-.001 3.426l6.857.008.001-1-6.857-.008-.001 1zm0-6.853l4.572.003v-1L8.93 8.568v1zM18.071 20H6.643v1H18.07v-1zM6 19.357V5.643H5v13.714h1zM6.643 5h9.143V4H6.643v1zm12.071 2.929v11.428h1V7.93h-1zm-3.282-3.075l3.429 3.428.707-.707-3.429-3.429-.707.708zM6.642 20A.643.643 0 016 19.357H5C5 20.265 5.736 21 6.643 21v-1zm11.43 1c.907 0 1.642-.735 1.642-1.643h-1a.643.643 0 01-.643.643v1zM6 5.643C6 5.288 6.288 5 6.643 5V4C5.736 4 5 4.736 5 5.643h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTextDocument;
