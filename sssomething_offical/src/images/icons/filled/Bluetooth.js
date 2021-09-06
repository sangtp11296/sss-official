import * as React from "react";

function SvgBluetooth(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.626 3.557a.5.5 0 01.518.033l5.714 4a.5.5 0 01-.005.823L13.593 12l5.26 3.587a.5.5 0 01.005.823l-5.714 4a.5.5 0 01-.787-.41v-7.158l-6.075 4.143-.564-.827 6.1-4.158-6.1-4.158.564-.827 6.075 4.143V4a.5.5 0 01.27-.443zm.731 9.493l4.335 2.955-4.335 3.035v-5.99zm0-2.1V4.96l4.335 3.035-4.335 2.955z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBluetooth;
