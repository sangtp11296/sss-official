import * as React from "react";

function SvgExpand(props) {
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
        d="M5 4.5h4.375v1H6.207l4.147 4.146-.708.708L5.5 6.207v3.168h-1V5a.5.5 0 01.5-.5zm13.793 1h-3.168v-1H20a.5.5 0 01.5.5v4.375h-1V6.207l-4.146 4.147-.708-.708L18.793 5.5zm-8.44 9.854L6.208 19.5h3.168v1H5a.5.5 0 01-.5-.5v-4.375h1v3.168l4.146-4.147.708.708zm5-.708l4.147 4.147v-3.168h1V20a.5.5 0 01-.5.5h-4.375v-1h3.168l-4.147-4.146.708-.708z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgExpand;
