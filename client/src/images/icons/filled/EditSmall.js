import * as React from "react";

function SvgEditSmall(props) {
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
        d="M13.6 7.2l-6.4 6.4v3.2h3.2l6.4-6.4-3.2-3.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEditSmall;
