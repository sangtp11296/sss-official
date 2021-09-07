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
        d="M11.503 5a3.501 3.501 0 100 7 3.5 3.5 0 100-7zM9.502 14A3.502 3.502 0 006 17.5V20h11.007v-2.499A3.502 3.502 0 0013.505 14H9.502z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgUser;
