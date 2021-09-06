import * as React from "react";

function SvgBag(props) {
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
        d="M9.142 7.733a2.667 2.667 0 015.333 0v.534h1.067v-.534a3.733 3.733 0 00-7.467 0v.534h1.067v-.534zM5.84 10.757a1.6 1.6 0 011.59-1.424h8.757a1.6 1.6 0 011.59 1.424l.83 7.466A1.6 1.6 0 0117.017 20H6.6a1.6 1.6 0 01-1.59-1.777l.83-7.466z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBag;
