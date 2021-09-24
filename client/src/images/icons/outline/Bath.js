import * as React from "react";

function SvgBath(props) {
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
        d="M4 11.724h16.552M8.966 17.241h6.62m-6.62 0a3.31 3.31 0 01-3.31-3.31v-6.62A3.31 3.31 0 018.965 4h2.206v1.655M8.966 17.241V20m6.62-2.759a3.31 3.31 0 003.31-3.31v-2.207m-3.31 5.517V20M9.517 7.31h3.31"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgBath;
