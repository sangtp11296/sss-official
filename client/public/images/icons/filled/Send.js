import * as React from "react";

function SvgSend(props) {
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
        d="M20 4.76a.534.534 0 01-.108.153L9.778 15.027l2.858 4.762a.535.535 0 00.95-.064L20 4.759zM9.022 14.27L4.26 11.414a.535.535 0 01.064-.95l14.969-6.415a.534.534 0 00-.157.109L9.022 14.27z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSend;
