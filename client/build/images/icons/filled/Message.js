import * as React from "react";

function SvgMessage(props) {
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
        d="M5.6 4C4.716 4 4 4.715 4 5.6v9.593c0 .884.716 1.6 1.6 1.6h3.981l1.975 2.96a.533.533 0 00.888 0l1.975-2.96H18.4c.884 0 1.6-.716 1.6-1.6V5.599C20 4.715 19.284 4 18.4 4H5.6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessage;
