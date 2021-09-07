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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5.5a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h6.583v1H6A1.5 1.5 0 014.5 18V6A1.5 1.5 0 016 4.5h6.583v1H6zm9.854 2.646l3.5 3.5a.5.5 0 01.013.693l-3.5 3.792-.734-.678 2.725-2.953H7.917v-1h9.876l-2.647-2.646.708-.708z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLogout;
