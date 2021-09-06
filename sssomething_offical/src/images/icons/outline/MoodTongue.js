import * as React from "react";

function SvgMoodTongue(props) {
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
        d="M8 9.714h1.143m5.714 0H16m-8 3.429h8m-6.286 0v2.286a2.286 2.286 0 004.572 0v-2.286M12 20a8 8 0 110-16 8 8 0 010 16z"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgMoodTongue;
