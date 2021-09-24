import * as React from "react";

function SvgEdit(props) {
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
        d="M15.194 6.806l-8.963 8.963-.737 3.725 3.725-.738 8.963-8.963m-2.988-2.987l2.241-2.241 2.988 2.988-2.241 2.24m-2.988-2.987l2.988 2.987"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgEdit;
