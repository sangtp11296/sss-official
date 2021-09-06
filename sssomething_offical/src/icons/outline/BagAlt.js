import * as React from "react";

function SvgBagAlt(props) {
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
        d="M15.25 6.125v2.708a3.25 3.25 0 11-6.5 0V6.125M5.5 5.583v13c0 .599.485 1.084 1.083 1.084h10.834c.598 0 1.083-.485 1.083-1.084v-13c0-.598-.485-1.083-1.083-1.083H6.583c-.598 0-1.083.485-1.083 1.083z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgBagAlt;
