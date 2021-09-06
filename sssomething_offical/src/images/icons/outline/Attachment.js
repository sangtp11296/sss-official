import * as React from "react";

function SvgAttachment(props) {
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
        d="M5 4v4.966a2.207 2.207 0 104.414 0v-3.31a1.103 1.103 0 10-2.207 0v3.861m3.862-4.965h7.172c.61 0 1.104.494 1.104 1.103v13.242c0 .609-.494 1.103-1.104 1.103H7.207c-.61 0-1.104-.494-1.104-1.103v-6.07m10.483-3.861h-4.414m4.414 3.31h-4.414m4.414 3.31H8.862"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgAttachment;
