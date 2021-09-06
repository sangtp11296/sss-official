import * as React from "react";

function SvgQuestionCircle(props) {
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
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm5.867-1.6c0-1.178.955-2.133 2.133-2.133h.64c1.12 0 2.027.907 2.027 2.026v.107a2.133 2.133 0 01-2.134 2.133V13.6h-1.066v-2.133h1.066c.59 0 1.067-.478 1.067-1.067v-.107a.96.96 0 00-.96-.96H12c-.59 0-1.067.478-1.067 1.067H9.867zm1.6 5.333v-1.066h1.066v1.066h-1.066z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgQuestionCircle;
