import * as React from "react";

function SvgLinkedin(props) {
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
        d="M8.571 10.286V16m6.858 0v-2.857a2.286 2.286 0 10-4.572 0V16v-5.714M8 8.57h1.143M5.143 4h13.714C19.488 4 20 4.512 20 5.143v13.714c0 .631-.512 1.143-1.143 1.143H5.143A1.143 1.143 0 014 18.857V5.143C4 4.512 4.512 4 5.143 4z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgLinkedin;
