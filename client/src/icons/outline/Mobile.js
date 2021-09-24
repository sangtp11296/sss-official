import * as React from "react";

function SvgMobile(props) {
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
        d="M10.475 16.196h3.15M7.85 19.25h8.4c.58 0 1.05-.456 1.05-1.018V6.018C17.3 5.456 16.83 5 16.25 5h-8.4c-.58 0-1.05.456-1.05 1.018v12.214c0 .562.47 1.018 1.05 1.018z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgMobile;
