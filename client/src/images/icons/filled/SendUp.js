import * as React from "react";

function SvgSendUp(props) {
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
        d="M11.646 4.646a.5.5 0 01.708 0l4.923 4.924-.707.707-4.07-4.07v11.716h-1V6.207l-4.07 4.07-.707-.707 4.923-4.924zM20 19.27v1H4v-1h16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSendUp;
