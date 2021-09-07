import * as React from "react";

function SvgSave(props) {
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
        d="M8.371 19.8v-3.429c0-.63.512-1.142 1.143-1.142h4.572c.63 0 1.143.511 1.143 1.142V19.8m3.428 0H4.943A1.143 1.143 0 013.8 18.657V4.943c0-.631.512-1.143 1.143-1.143h9.812c.303 0 .594.12.808.335l3.902 3.902c.215.214.335.505.335.808v9.812c0 .631-.512 1.143-1.143 1.143z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgSave;
