import * as React from "react";

function SvgMenu(props) {
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
        d="M20.8 6H4V5h16.8v1zM13.6 18.8H4v-1h9.6v1zM17.2 12.4H4v-1h13.2v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMenu;
