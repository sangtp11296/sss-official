import * as React from "react";

function SvgHourglass(props) {
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
        d="M7.667 4v4.983c0 .566.224 1.108.625 1.508l.754.755a1.067 1.067 0 010 1.508l-1.067 1.067c-.2.2-.312.471-.312.754V20M16.2 4v5.425c0 .283-.112.554-.312.754l-1.067 1.067a1.067 1.067 0 000 1.508l1.067 1.067c.2.2.312.471.312.754V20M5 4.533h13.867M5 19.467h13.867"
        stroke="currentColor"
      />
    </svg>
  );
}

export default SvgHourglass;
