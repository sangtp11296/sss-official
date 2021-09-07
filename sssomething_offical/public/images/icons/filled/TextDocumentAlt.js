import * as React from "react";

function SvgTextDocumentAlt(props) {
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
        d="M5 5.6A1.6 1.6 0 016.6 4h8.754l3.513 3.512V18.4a1.6 1.6 0 01-1.6 1.6H6.6A1.6 1.6 0 015 18.4V5.6zm3.2 2.664h7.467V9.33H8.2V8.264zm7.467 3.198H8.2v1.066h7.467v-1.066zm0 3.205H8.2v1.066h7.467v-1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTextDocumentAlt;
