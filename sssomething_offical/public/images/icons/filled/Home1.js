import * as React from "react";

function SvgHome1(props) {
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
        d="M11.8 3.8l-8 6.857v8c0 .631.512 1.143 1.143 1.143h4.571v-3.428a2.286 2.286 0 114.572 0V19.8h4.571c.631 0 1.143-.512 1.143-1.143v-8l-8-6.857z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHome1;
