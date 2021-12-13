import * as React from "react";

function SvgInstagram(props) {
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
        d="M16 7.429h1.143M8.57 4h6.858A4.571 4.571 0 0120 8.571v6.858A4.571 4.571 0 0115.429 20H8.57A4.571 4.571 0 014 15.429V8.57A4.571 4.571 0 018.571 4zM12 15.429a3.429 3.429 0 110-6.858 3.429 3.429 0 010 6.858z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgInstagram;
