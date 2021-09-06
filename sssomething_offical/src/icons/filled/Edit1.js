import * as React from "react";

function SvgEdit1(props) {
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
        d="M14.51 4.156a.533.533 0 00-.754 0L10.933 6.98l6.088 6.088 2.823-2.823a.533.533 0 000-.754L14.51 4.156zM4 13.912l6.18-6.179 6.087 6.088L10.087 20H4.534A.533.533 0 014 19.467v-5.555zM12.533 20H20v-1.067h-7.467V20z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgEdit1;
