import * as React from "react";

function SvgSortUp(props) {
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
        d="M6.957 3.646a.5.5 0 01.707 0l3.31 3.31-.707.708L7.81 5.207V20h-1V5.207L4.354 7.664l-.708-.707 3.31-3.31zM20 7.81h-6.62v-1H20v1zm-2.207 4.414H13.38v-1h4.414v1zm-2.207 4.414H13.38v-1h2.207v1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSortUp;
