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
        x={14.576}
        y={3.975}
        width={7}
        height={16.333}
        rx={3.5}
        transform="rotate(45 14.576 3.975)"
        stroke="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.071 15.071c.211.084.43.16.656.226l.283-.96c-2.984-.877-4.482-3.604-4.847-4.846l-.96.282c.059.198.14.427.248.678l-.45-.45-2.814 2.735a3.944 3.944 0 105.577 5.577L13.5 15.5l-.429-.429zM15.872 10.457a.5.5 0 010 .707l-1.886 1.886a.5.5 0 11-.707-.708l1.886-1.885a.5.5 0 01.707 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPillCapsule;
