import * as React from "react";

function SvgPillCapsule(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={14.575}
        y={3.975}
        width={7}
        height={16.333}
        rx={3.5}
        transform="rotate(45 14.575 3.975)"
        stroke="currentColor"
      />
      <path
        d="M8.683 9.632c.393 1.335 1.98 4.242 5.185 5.185"
        stroke="currentColor"
      />
      <path
        d="M15.518 10.81l-1.885 1.886"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgPillCapsule;
