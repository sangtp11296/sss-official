import * as React from "react";

function SvgShieldX(props) {
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
        d="M8.571 8.571l6.858 6.858m-6.858 0L15.43 8.57M12 4L4 8.571v.823A11.03 11.03 0 0012 20a11.03 11.03 0 008-10.606v-.823L12 4z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgShieldX;
