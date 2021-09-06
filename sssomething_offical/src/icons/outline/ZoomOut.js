import * as React from "react";

function SvgZoomOut(props) {
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
        d="M20 20l-4.571-4.571M8 10.857h5.714m-2.857 6.857a6.857 6.857 0 110-13.714 6.857 6.857 0 010 13.714z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgZoomOut;
