import * as React from "react";

function SvgShare(props) {
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
        d="M14.667 6.665a2.667 2.667 0 015.333 0 2.667 2.667 0 01-3.803 2.412L13.74 12.02l2.174 3.047A2.667 2.667 0 0120 17.325a2.667 2.667 0 11-4.864-1.51l-2.34-3.28H9.278A2.668 2.668 0 014 11.994a2.667 2.667 0 015.28-.528h3.533l2.528-3.03a2.654 2.654 0 01-.674-1.772z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShare;
