import * as React from "react";

function SvgImageDocument(props) {
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
        d="M5 5.6A1.6 1.6 0 016.6 4h8.754l3.513 3.512v7.466l-2.666-2.67-3.157 3.154-4.31-5.382L5 14.746V5.6zm10.667 4.8H14.6V9.333h1.067V10.4z"
        fill="currentColor"
      />
      <path
        d="M5 16.454V18.4A1.6 1.6 0 006.6 20h10.667a1.6 1.6 0 001.6-1.6v-1.913l-2.667-2.67-3.244 3.24-4.222-5.27L5 16.454z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgImageDocument;
