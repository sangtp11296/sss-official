import * as React from "react";

function SvgXCircle(props) {
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
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm10.823 3.577L12 12.754l-2.823 2.823-.754-.754L11.246 12 8.423 9.177l.754-.754L12 11.246l2.823-2.823.754.754L12.754 12l2.823 2.823-.754.754z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgXCircle;
