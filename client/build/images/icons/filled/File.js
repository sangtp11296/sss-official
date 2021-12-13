import * as React from "react";

function SvgFile(props) {
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
        d="M6.6 4A1.6 1.6 0 005 5.6v12.8A1.6 1.6 0 006.6 20h10.667a1.6 1.6 0 001.6-1.6V7.512L15.354 4H6.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFile;
