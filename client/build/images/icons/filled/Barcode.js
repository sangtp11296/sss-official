import * as React from "react";

function SvgBarcode(props) {
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
        d="M3.5 18.571V6h1v12.571h-1zm5.714 0V6h1v12.571h-1zm2.286 0V6h1v12.571h-1zm3.429 0V6h1v12.571h-1zm4.571 0V6h1v12.571h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBarcode;
