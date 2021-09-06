import * as React from "react";

function SvgPassword(props) {
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
        d="M17.714 13.143V12c0-.631-.511-1.143-1.143-1.143H5.143C4.512 10.857 4 11.37 4 12v6.857C4 19.488 4.512 20 5.143 20H16.57c.632 0 1.143-.512 1.143-1.143v-1.143m0-4.571h-4.571a2.286 2.286 0 100 4.571h4.571m0-4.571a2.286 2.286 0 110 4.571M7.43 10.857V7.43a3.429 3.429 0 116.857 0v3.428m2.857 4.572h1.143m-3.429 0H16m-3.429 0h1.143"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgPassword;
