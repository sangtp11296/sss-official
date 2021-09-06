import * as React from "react";

function SvgUsers(props) {
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
        d="M9.867 4a3.732 3.732 0 100 7.463 3.732 3.732 0 100-7.463zM7.733 13.594A3.733 3.733 0 004 17.326v2.664h11.733v-2.663A3.733 3.733 0 0012 13.593H7.733zM17.333 14.667H16.8V20H20v-2.667a2.667 2.667 0 00-2.667-2.666z"
        fill="currentColor"
      />
      <path
        d="M16.267 8.267a2.667 2.667 0 100 5.333 2.667 2.667 0 000-5.333z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUsers;
