import * as React from "react";

function SvgAppointments(props) {
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
        d="M7.11 3v5.517M15.938 3v5.517m-9.38 2.759H9.87m6.62 0h-3.31m-6.62 3.31h3.31m3.31 0h3.31M4.904 5.76h13.242c.61 0 1.103.494 1.103 1.103v11.035c0 .609-.494 1.103-1.103 1.103H4.903c-.609 0-1.103-.494-1.103-1.103V6.862c0-.61.494-1.103 1.103-1.103z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgAppointments;
