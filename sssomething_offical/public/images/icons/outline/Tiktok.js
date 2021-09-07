import * as React from "react";

function SvgTiktok(props) {
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
        d="M13.724 4v12.138a3.862 3.862 0 11-3.862-3.862m8.828-2.207a4.966 4.966 0 01-4.966-4.966"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgTiktok;
