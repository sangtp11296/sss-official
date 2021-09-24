import * as React from "react";

function SvgPrint(props) {
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
        d="M7.229 17.514H4.943A1.143 1.143 0 013.8 16.371V11.8c0-.631.512-1.143 1.143-1.143h13.714c.631 0 1.143.512 1.143 1.143v4.571c0 .632-.512 1.143-1.143 1.143h-2.286M7.23 10.657V4.943c0-.631.511-1.143 1.142-1.143h6.858c.63 0 1.142.512 1.142 1.143v5.714M7.23 15.23h9.142V19.8H7.23v-4.571z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgPrint;
