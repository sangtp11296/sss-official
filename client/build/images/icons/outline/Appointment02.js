import * as React from "react";

function SvgAppointment02(props) {
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
        d="M7.429 4v5.714M16.57 4v5.714M5.143 6.857h13.714C19.488 6.857 20 7.37 20 8v11.429c0 .63-.512 1.142-1.143 1.142H5.143A1.143 1.143 0 014 19.43V8c0-.631.512-1.143 1.143-1.143z"
        stroke="currentColor"
      />
      <path d="M12 12v2h1.5" stroke="currentColor" strokeLinejoin="round" />
      <circle cx={12} cy={14} r={3.5} stroke="currentColor" />
    </svg>
  );
}

export default SvgAppointment02;
