import * as React from "react";

function SvgBagMinus(props) {
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
        d="M11.808 5.067a2.667 2.667 0 00-2.666 2.666v.534H8.075v-.534a3.733 3.733 0 117.467 0v.534h-1.067v-.534a2.667 2.667 0 00-2.667-2.666z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.43 9.333a1.6 1.6 0 00-1.59 1.424l-.83 7.466A1.6 1.6 0 006.6 20h10.417a1.6 1.6 0 001.59-1.777l-.83-7.466a1.6 1.6 0 00-1.59-1.424H7.43zM9.142 13.6v1.067h5.333V13.6H9.142z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBagMinus;
