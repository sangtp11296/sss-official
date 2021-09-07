import * as React from "react";

function SvgDownSmall(props) {
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
        d="M12.707 14.192L16.95 9.95h-9.9l4.243 4.242a1 1 0 001.414 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDownSmall;
