import * as React from "react";

function SvgPinAlt(props) {
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
        d="M12.414 20v-7.172m0 0a4.414 4.414 0 100-8.828 4.414 4.414 0 000 8.828z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgPinAlt;
