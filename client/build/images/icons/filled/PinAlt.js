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
        d="M12.1 4a5.1 5.1 0 00-.567 10.169V21h1.134v-6.831A5.1 5.1 0 0012.1 4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPinAlt;
