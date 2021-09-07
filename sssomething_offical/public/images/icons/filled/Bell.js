import * as React from "react";

function SvgBell(props) {
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
        d="M11.933 4a5.867 5.867 0 00-5.866 5.867v4.8H5v1.066h13.867v-1.066H17.8v-4.8A5.867 5.867 0 0011.933 4zM9.267 17.333V16.8H14.6v.533a2.667 2.667 0 11-5.333 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBell;
