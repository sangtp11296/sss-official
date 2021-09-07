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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.467 4h1.066v1.067A4.267 4.267 0 0018.8 9.333V10.4a5.325 5.325 0 01-4.267-2.133v7.466a4.267 4.267 0 11-4.266-4.266v1.066a3.2 3.2 0 103.2 3.2V4z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgTiktok;
