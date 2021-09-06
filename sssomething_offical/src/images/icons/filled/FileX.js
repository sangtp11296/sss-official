import * as React from "react";

function SvgFileX(props) {
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
        d="M5 5.6A1.6 1.6 0 016.6 4h8.754l3.513 3.512V18.4a1.6 1.6 0 01-1.6 1.6H6.6A1.6 1.6 0 015 18.4V5.6zm8.69 8.91l-1.757-1.756-1.756 1.756-.754-.754L11.179 12l-1.756-1.756.754-.754 1.756 1.756L13.69 9.49l.754.754L12.688 12l1.756 1.756-.754.754z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFileX;
