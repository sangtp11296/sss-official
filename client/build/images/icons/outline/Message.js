import * as React from "react";

function SvgMessage(props) {
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
        clipRule="evenodd"
        d="M9.718 16.571L12.005 20l2.287-3.429h4.575c.632 0 1.143-.51 1.143-1.142V5.143C20.01 4.51 19.5 4 18.867 4H5.144C4.51 4 4 4.51 4 5.143v10.286c0 .632.511 1.142 1.144 1.142h4.574z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgMessage;
