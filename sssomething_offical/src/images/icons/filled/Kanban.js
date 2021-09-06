import * as React from "react";

function SvgKanban(props) {
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
        d="M4 5.067h7.467V4H4v1.067zM12.533 5.067H20V4h-7.467v1.067zM4.533 7.2A.533.533 0 004 7.733v11.734c0 .294.239.533.533.533h6.4a.533.533 0 00.534-.533V7.733a.533.533 0 00-.534-.533h-6.4zM13.067 7.2a.533.533 0 00-.534.533v6.4c0 .295.24.534.534.534h6.4a.533.533 0 00.533-.534v-6.4a.533.533 0 00-.533-.533h-6.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgKanban;
