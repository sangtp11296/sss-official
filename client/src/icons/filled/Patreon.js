import * as React from "react";

function SvgPatreon(props) {
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
        d="M7.2 4H4v16h3.2V4zM14.133 4a5.867 5.867 0 100 11.733 5.867 5.867 0 000-11.733z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgPatreon;
