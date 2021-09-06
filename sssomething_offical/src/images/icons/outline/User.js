import * as React from "react";

function SvgUser(props) {
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
        clipRule="evenodd"
        d="M14.829 7.309a3.31 3.31 0 01-3.311 3.308 3.31 3.31 0 110-6.617 3.31 3.31 0 013.31 3.309zM17.036 19.44H6v-2.204a3.31 3.31 0 013.31-3.31h4.415a3.31 3.31 0 013.31 3.31v2.204z"
        stroke="currentColor"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default SvgUser;
