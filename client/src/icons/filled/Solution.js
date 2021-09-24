import * as React from "react";

function SvgSolution(props) {
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
        d="M5 5l.425 4.512M19 5l-.438 6.973m0 0l-.378 6.035a1 1 0 01-.998.937H7.223a1 1 0 01-.996-.906l-.802-8.527m13.137 2.46c-1.02.41-3.762.739-6.562-1.23-2.8-1.969-5.55-1.64-6.575-1.23"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.186 18.945H7.223a1 1 0 01-.996-.906l-.802-8.527C6.45 9.102 9.2 8.774 12 10.742c2.8 1.969 5.542 1.64 6.563 1.23l-.38 6.036a1 1 0 01-.997.937z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSolution;
