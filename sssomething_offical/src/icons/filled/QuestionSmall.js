import * as React from "react";

function SvgQuestionSmall(props) {
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
        d="M9.1 9.6A2.9 2.9 0 0112 6.7h.96a2.74 2.74 0 012.74 2.74v.16a2.9 2.9 0 01-2.9 2.9h-.3v1.9h-1v-2.9h1.3a1.9 1.9 0 001.9-1.9v-.16a1.74 1.74 0 00-1.74-1.74H12a1.9 1.9 0 00-1.9 1.9h-1zm3.7 6.7v1h-1.6v-1h1.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgQuestionSmall;
