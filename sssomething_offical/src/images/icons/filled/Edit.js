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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.646 7.354l-8.415 8.415-.737 3.725 3.725-.738 8.415-8.415-2.988-2.987zm.708-.708l2.987 2.988 2.082-2.081-2.988-2.988-2.081 2.081z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEdit;
