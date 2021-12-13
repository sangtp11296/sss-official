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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.85 5c-.58 0-1.05.456-1.05 1.018v12.214c0 .562.47 1.018 1.05 1.018h8.4c.58 0 1.05-.456 1.05-1.018V6.018C17.3 5.456 16.83 5 16.25 5h-8.4zm2.625 11.697h3.15v-1h-3.15v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMobile;
