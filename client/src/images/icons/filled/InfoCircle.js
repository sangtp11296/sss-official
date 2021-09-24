import * as React from "react";

function SvgInfoCircle(props) {
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
        d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-8.533-2.667V8.256h1.066v1.077h-1.066zm1.066 2.134v3.2H13.6v1.066h-3.2v-1.066h1.067v-2.134H10.4v-1.066h2.133z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgInfoCircle;
