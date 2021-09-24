import * as React from "react";

function SvgLoop(props) {
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
        d="M18.793 6.929l-2.575-2.575.707-.708 3.429 3.43a.5.5 0 010 .706l-3.429 3.429-.707-.707 2.575-2.575H7.429A2.929 2.929 0 004.5 10.857v1.715h-1v-1.715A3.929 3.929 0 017.429 6.93h11.364zm1.707 4.5v1.714a3.929 3.929 0 01-3.929 3.928H5.207l2.575 2.575-.707.708-3.429-3.429a.5.5 0 010-.707l3.429-3.429.707.707-2.575 2.575h11.364a2.929 2.929 0 002.929-2.928v-1.714h1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLoop;
