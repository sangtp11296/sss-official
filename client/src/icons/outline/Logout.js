import * as React from "react";

function SvgLogout(props) {
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
        d="M19 12l.367.34a.5.5 0 00-.013-.693L19 12zm-.367-.339l-3.5 3.792.734.678 3.5-3.792-.734-.678zm.72-.014l-3.5-3.5-.707.707 3.5 3.5.708-.707zM19 11.5H7.917v1H19v-1zM4.5 6v12h1V6h-1zM6 19.5h6.583v-1H6v1zm0-14h6.583v-1H6v1zM4.5 18A1.5 1.5 0 006 19.5v-1a.5.5 0 01-.5-.5h-1zm1-12a.5.5 0 01.5-.5v-1A1.5 1.5 0 004.5 6h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLogout;
