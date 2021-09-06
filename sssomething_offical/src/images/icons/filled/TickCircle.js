import * as React from "react";

function SvgTickCircle(props) {
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
        d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm7.543 3.425l4.607-5.759L15.317 9 11.39 13.91 8.608 11.59l-.683.82 3.618 3.015z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgTickCircle;
