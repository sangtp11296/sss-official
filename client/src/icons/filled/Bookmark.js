import * as React from "react";

function SvgBookmark(props) {
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
        d="M17.733 4H6v15.467a.533.533 0 00.867.416l5-4 5 4a.533.533 0 00.866-.416V4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBookmark;
