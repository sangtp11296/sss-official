import * as React from "react";

function SvgEnvelope(props) {
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
        d="M4 8.429L12 13l8-4.571M5.143 5h13.714C19.488 5 20 5.512 20 6.143V17.57c0 .632-.512 1.143-1.143 1.143H5.143A1.143 1.143 0 014 17.571V6.143C4 5.512 4.512 5 5.143 5z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgEnvelope;
