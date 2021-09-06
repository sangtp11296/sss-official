import * as React from "react";

function SvgBarcode(props) {
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
        d="M4 6v12.571M9.714 6v12.571M12 6v12.571M20 6v12.571M15.429 6v12.571"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgBarcode;
