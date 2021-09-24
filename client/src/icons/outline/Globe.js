import * as React from "react";

function SvgGlobe(props) {
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
        d="M10.571 20v-3.429m-4 2.858h8M15.107 4A6.857 6.857 0 116 14.254m4.571-8.54a3.429 3.429 0 100 6.857 3.429 3.429 0 000-6.857z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgGlobe;
