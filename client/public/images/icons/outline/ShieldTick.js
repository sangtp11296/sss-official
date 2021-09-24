import * as React from "react";

function SvgShieldTick(props) {
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
        d="M8 12l3.429 2.857L16 9.143M12 4L4 8.571v.823A11.03 11.03 0 0012 20a11.03 11.03 0 008-10.606v-.823L12 4z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgShieldTick;
