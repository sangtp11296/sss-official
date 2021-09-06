import * as React from "react";

function SvgXSmall(props) {
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
        stroke="currentColor"
        d="M7.688 7.569l8.666 8.665M16.354 7.766l-8.666 8.665"
      />
    </svg>
  );
}

export default SvgXSmall;
